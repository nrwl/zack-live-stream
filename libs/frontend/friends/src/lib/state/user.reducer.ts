import { createReducer, on } from '@ngrx/store';
import {
  usersEntityAdapter,
  usersInitialState,
  retrieveFriendsSucceeded,
  logoutFailed,
  loginSucceeded,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';

export const reducer = createReducer(
  usersInitialState,
  on(
    retrieveFriendsSucceeded,
    (
      state,
      { friends, findableFriends, pendingRequests, incomingRequests }
    ) => {
      const friendIds = friends.reduce((acc, friend) => {
        acc[friend.id] = true;
        return acc;
      }, {});
      const findableFriendIds = findableFriends.reduce((acc, user) => {
        acc[user.id] = true;
        return acc;
      }, {});
      const pendingRequestIds = pendingRequests.reduce((acc, user) => {
        acc[user.id] = true;
        return acc;
      }, {});
      const incomingRequestIds = incomingRequests.reduce((acc, user) => {
        acc[user.id] = true;
        return acc;
      }, {});
      return {
        ...usersEntityAdapter.upsertMany(
          friends
            .concat(findableFriends)
            .concat(pendingRequests)
            .concat(incomingRequests),
          state
        ),
        friendIds,
        findableFriendIds,
        pendingRequestIds,
        incomingRequestIds,
      };
    }
  ),
  on(logoutFailed, loginSucceeded, (state) =>
    usersEntityAdapter.removeAll(state)
  )
);
