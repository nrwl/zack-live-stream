import { createSelector, createAction, props } from '@ngrx/store';
import { User } from '@zack-live-stream/auth-utils';

export const submitLoginForm = createAction(
  '[Login Form] Submit',
  props<{ username: string; password: string }>()
);

export const loginFailed = createAction('[Auth API] Login Failed');

export const loginSucceeded = createAction(
  '[Auth API] Login Succeeded',
  props<{ user: User }>()
);

export const submitLogout = createAction('[User] Logout');

export const logoutFailed = createAction('[Auth API] Logout Failed');

export const logoutSucceeded = createAction('[Auth API] Logout Succeeded');
