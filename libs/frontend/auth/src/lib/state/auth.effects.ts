import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  submitLoginForm,
  loginSucceeded,
  loginFailed,
  submitLogout,
  logoutSucceeded,
  logoutFailed,
  initializedWithUser,
} from '@zack-live-stream/frontend/auth-ngrx-utils';
import { switchMap, catchError, map, tap, filter } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private _authService: AuthService, private _actions: Actions) {}

  login$ = createEffect(() =>
    this._actions.pipe(
      ofType(submitLoginForm),
      switchMap((creds) =>
        this._authService.login(creds).pipe(
          map((response) =>
            response.result === 'success'
              ? loginSucceeded({ user: response.user })
              : loginFailed()
          ),
          catchError(() => of(loginFailed()))
        )
      )
    )
  );

  logout$ = createEffect(() => {
    return this._actions.pipe(
      ofType(submitLogout),
      switchMap(() =>
        this._authService.logout().pipe(
          map(() => logoutSucceeded()),
          catchError(() => of(logoutFailed()))
        )
      )
    );
  });

  removeAccessTokenOnLogout$ = createEffect(
    () =>
      this._actions.pipe(
        ofType(logoutFailed, logoutSucceeded),
        tap(() => this._authService.removeAccessToken())
      ),
    { dispatch: false }
  );

  getUserOnAuthInit$ = createEffect(() => {
    return of({}).pipe(
      filter(() => !!this._authService.getAccessToken()),
      switchMap(() =>
        this._authService
          .getUser()
          .pipe(map((user) => initializedWithUser({ user })))
      )
    );
  });
}
