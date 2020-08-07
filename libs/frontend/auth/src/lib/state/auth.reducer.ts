import { createReducer, on } from '@ngrx/store';
import {
  AuthState,
  submitLoginForm,
  loginFailed,
  loginSucceeded,
  submitLogout,
  logoutFailed,
  logoutSucceeded,
} from '@zack-live-stream/frontend/auth-ngrx-utils';

export const reducer = createReducer<AuthState>(
  { loggedIn: 'not attempted', user: null },
  on(submitLoginForm, () => ({ loggedIn: 'pending', user: null })),
  on(loginFailed, () => ({ loggedIn: 'not attempted', user: null })),
  on(loginSucceeded, (_state, { user }) => ({ loggedIn: 'logged in', user })),
  on(logoutFailed, logoutSucceeded, () => ({
    loggedIn: 'not attempted',
    user: null,
  }))
);
