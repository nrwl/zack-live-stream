import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loginSucceeded,
  retrieveFriendsSucceeded,
  retrieveFriendsFailed,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '@zack-live-stream/auth-utils';
import { FriendService } from '../friend.service';

@Injectable()
export class UserEffects {
  constructor(
    private _actions$: Actions,
    private friendService: FriendService
  ) {}

  getFriendsAfterLoggingIn$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loginSucceeded),
      switchMap(() =>
        this.friendService.getFriends().pipe(
          map((users) => retrieveFriendsSucceeded({ friends: users })),
          catchError(() => of(retrieveFriendsFailed()))
        )
      )
    );
  });
}
