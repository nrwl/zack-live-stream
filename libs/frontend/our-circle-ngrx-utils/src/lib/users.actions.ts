import { createAction, props } from '@ngrx/store';
import { User } from '@zack-live-stream/auth-utils';

export interface GetFriendsResponseBody {
  friends: User[];
  findableFriends: User[];
  pendingRequests: User[];
  incomingRequests: User[];
}

export const retrieveFriendsSucceeded = createAction(
  '[Friends API] Get Friends Succeeded',
  props<GetFriendsResponseBody>()
);

export const retrieveFriendsFailed = createAction(
  '[Friends API] Get Friends Failed'
);

export const userRequestsNewFriendship = createAction(
  '[Findable Friends List] User Requests New Friendship',
  props<{ userId: string }>()
);

export const approveFriendship = createAction(
  '[Approve Friendships List] Approve Friendship',
  props<{ userId: string }>()
);
