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

export const selectPendingRequestIds = createSelector(
  usersState,
  (state) => state.pendingRequestIds
);

export const selectIncomingRequestIds = createSelector(
  usersState,
  (state) => state.incomingRequestIds
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

export const selectPendingRequests = createSelector(
  selectAllUsers,
  selectLoggedInUser,
  selectPendingRequestIds,
  (allUsers, loggedInUser, pendingRequestIds) =>
    allUsers
      .filter((user) => user.id !== loggedInUser.id)
      .filter((user) => !!pendingRequestIds[user.id])
);

export const selectIncomingRequests = createSelector(
  selectAllUsers,
  selectLoggedInUser,
  selectIncomingRequestIds,
  (allUsers, loggedInUser, incomingRequestIds) =>
    allUsers
      .filter((user) => user.id !== loggedInUser.id)
      .filter((user) => !!incomingRequestIds[user.id])
);
