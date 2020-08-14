import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  initializedWithUser,
  loginSucceeded,
  retrieveFriendsFailed,
  retrieveFriendsSucceeded,
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
          map(({ friends, findableFriends, friendRequests }) =>
            retrieveFriendsSucceeded({
              friends,
              findableFriends,
              friendRequests,
            })
          ),
          catchError(() => of(retrieveFriendsFailed()))
        )
      )
    );
  });
}
