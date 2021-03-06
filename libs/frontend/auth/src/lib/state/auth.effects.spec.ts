import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  submitLoginForm,
  loginSucceeded,
  loginFailed,
  submitLogout,
  logoutSucceeded,
  logoutFailed,
} from '@zack-live-stream/frontend/auth-ngrx-utils';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { AuthEffects } from './auth.effects';
import { AuthService } from '../auth.service';

let testScheduler: TestScheduler;

beforeEach(() => {
  testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });
});

describe('Auth NgRxEffects', () => {
  let actions$: Observable<Action>;
  let effects: AuthEffects;
  let mockAuthService = {
    login: jest.fn(),
    logout: jest.fn(),
    getAccessToken: jest.fn(),
    setAccessToken: jest.fn(),
    removeAccessToken: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        AuthEffects,
        { provide: AuthService, useValue: mockAuthService },
      ],
    });
    effects = TestBed.get(AuthEffects);
  });

  describe('login$', () => {
    test('user submits login and it works', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('50s a', {
          a: submitLoginForm({
            username: 'test username',
            password: 'test password',
          }),
        });
        const user = { id: 'test id', name: 'test name' };
        mockAuthService.login.mockReturnValue(
          cold('300ms b', {
            b: {
              result: 'success',
              accessToken: 'test access token',
              user,
            },
          })
        );
        expectObservable(effects.login$).toBe('50300ms c', {
          c: loginSucceeded({ user }),
        });
      });
    });
    test('user submits login and the login fails', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('------a-----', {
          a: submitLoginForm({
            username: 'test username',
            password: 'test password',
          }),
        });
        mockAuthService.login.mockReturnValue(
          cold('---b', {
            b: {
              result: 'error',
              reason: 'you suck!',
            },
          })
        );
        expectObservable(effects.login$).toBe('---------c', {
          c: loginFailed(),
        });
      });
    });
    test('user submits login but request has an error', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('------a-----', {
          a: submitLoginForm({
            username: 'test username',
            password: 'test password',
          }),
        });
        mockAuthService.login.mockReturnValue(cold('---#'));
        expectObservable(effects.login$).toBe('---------c', {
          c: loginFailed(),
        });
      });
    });
    test('user submits login but request has an error, then they login again successfully', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('------a-----a----', {
          a: submitLoginForm({
            username: 'test username',
            password: 'test password',
          }),
        });
        mockAuthService.login.mockReturnValueOnce(cold('---#'));
        const user = { id: 'test id', name: 'test name' };
        mockAuthService.login.mockReturnValue(
          cold('---b', {
            b: {
              result: 'success',
              accessToken: 'test access token',
              user,
            },
          })
        );
        expectObservable(effects.login$).toBe('---------c-----d', {
          c: loginFailed(),
          d: loginSucceeded({ user }),
        });
      });
    });
  });

  describe('logout$', () => {
    test('user submits logout and it works', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('50s a', { a: submitLogout() });
        mockAuthService.logout.mockReturnValue(cold('300ms b', { b: {} }));
        expectObservable(effects.logout$).toBe('50300ms c', {
          c: logoutSucceeded(),
        });
      });
    });
    test('user submits logout and network error', () => {
      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions$ = hot('-----a', { a: submitLogout() });
        mockAuthService.logout.mockReturnValue(cold('---#'));
        expectObservable(effects.logout$).toBe('--------c', {
          c: logoutFailed(),
        });
      });
    });
  });

  describe('removeAccessTokenOnLogout$', () => {
    test('on logout, the access token should be removed', () => {
      testScheduler.run(({ hot, flush }) => {
        actions$ = hot('-----a', { a: logoutSucceeded() });
        effects.removeAccessTokenOnLogout$.subscribe();
        flush();
        expect(mockAuthService.removeAccessToken).toHaveBeenCalledTimes(1);
      });
    });
  });
});
