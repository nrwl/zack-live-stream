import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectLoggedInUser } from '@zack-live-stream/frontend/auth-ngrx-utils';
import { usersEntityAdapter } from './users.adapter';

export const usersState = createFeatureSelector('users');

export const selectAllUsers = createSelector(
  usersState,
  usersEntityAdapter.getSelectors().selectAll
);

export const selectFriends = createSelector(
  selectAllUsers,
  selectLoggedInUser,
  (allUsers, loggedInUser) =>
    allUsers.filter((user) => user.id !== loggedInUser.id)
);
