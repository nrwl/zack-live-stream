import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  initializedWithUser,
  loginSucceeded,
  retrieveFriendsFailed,
  retrieveFriendsSucceeded,
  userRequestsNewFriendship,
  approveFriendship,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FriendService } from '../friend.service';

@Injectable()
export class UserEffects {
  constructor(
    private _actions$: Actions,
    private friendService: FriendService
  ) {}

  getFriendsAfterLoggingIn$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loginSucceeded, initializedWithUser),
      switchMap(() =>
        this.friendService.getFriends().pipe(
          map(retrieveFriendsSucceeded),
          catchError(() => of(retrieveFriendsFailed()))
        )
      )
    );
  });

  requestFriendships$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(userRequestsNewFriendship),
      switchMap(({ userId }) =>
        this.friendService.requestAddFriend(userId).pipe(
          map(retrieveFriendsSucceeded),
          catchError(() => of(retrieveFriendsFailed()))
        )
      )
    );
  });

  approveFriendships$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(approveFriendship),
      switchMap(({ userId }) =>
        this.friendService.approveFriend(userId).pipe(
          map(retrieveFriendsSucceeded),
          catchError(() => of(retrieveFriendsFailed()))
        )
      )
    );
  });
}
