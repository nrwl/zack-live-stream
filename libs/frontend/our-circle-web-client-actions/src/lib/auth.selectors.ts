import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './auth.state-interface';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectLoggedIn = createSelector(
  selectAuthState,
  (state) => state.loggedIn
);

export const selectLoggedInUser = createSelector(
  selectAuthState,
  (state) => state.user
);
