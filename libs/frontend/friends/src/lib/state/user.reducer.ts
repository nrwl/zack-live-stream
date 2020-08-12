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
  on(retrieveFriendsSucceeded, (state, { friends }) =>
    usersEntityAdapter.upsertMany(friends, state)
  ),
  on(logoutFailed, loginSucceeded, (state) =>
    usersEntityAdapter.removeAll(state)
  )
);
