import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectLoggedInUser } from '@zack-live-stream/frontend/auth-ngrx-utils';
import { usersEntityAdapter, UserState } from './users.adapter';

export const usersState = createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  usersState,
  usersEntityAdapter.getSelectors().selectAll
);

export const selectFriendIds = createSelector(
  usersState,
  (state) => state.friendIds
);

export const selectFindableFriendIds = createSelector(
  usersState,
  (state) => state.findableFriendIds
);

export const selectFriendRequestIds = createSelector(
  usersState,
  (state) => state.friendRequestIds
);

export const selectFriends = createSelector(
  selectAllUsers,
  selectLoggedInUser,
  selectFriendIds,
  (allUsers, loggedInUser, friendIds) =>
    allUsers
      .filter((user) => user.id !== loggedInUser.id)
      .filter((user) => !!friendIds[user.id])
);

export const selectFindableFriends = createSelector(
  selectAllUsers,
  selectLoggedInUser,
  selectFindableFriendIds,
  (allUsers, loggedInUser, findableFriendIds) =>
    allUsers
      .filter((user) => user.id !== loggedInUser.id)
      .filter((user) => !!findableFriendIds[user.id])
);

export const selectFriendRequests = createSelector(
  selectAllUsers,
  selectLoggedInUser,
  selectFriendRequestIds,
  (allUsers, loggedInUser, friendRequestIds) =>
    allUsers
      .filter((user) => user.id !== loggedInUser.id)
      .filter((user) => !!friendRequestIds[user.id])
);
