import { createAction, props } from '@ngrx/store';
import { User } from '@zack-live-stream/auth-utils';

export const retrieveFriendsSucceeded = createAction(
  '[Friends API] Get Friends Succeeded',
  props<{ friends: User[] }>()
);

export const retrieveFriendsFailed = createAction(
  '[Friends API] Get Friends Failed'
);
