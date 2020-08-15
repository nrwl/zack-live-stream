import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  createNewContentPostFails,
  createNewContentPostSucceeds,
  getContentPostsFails,
  getContentPostsSucceeds,
  initializedWithUser,
  requestCreateNewContentPost,
  retrieveFriendsSucceeded,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ContentPostService } from '../content-post.service';

@Injectable()
export class ContentPostEffects {
  constructor(
    private _contentPostService: ContentPostService,
    private _actions: Actions
  ) {}

  requestCreateNewContentPost$ = createEffect(() =>
    this._actions.pipe(
      ofType(requestCreateNewContentPost),
      switchMap(({ requestBody }) =>
        this._contentPostService.createContentPost(requestBody).pipe(
          map(
            (response) => createNewContentPostSucceeds({ response }),
            catchError(() => of(createNewContentPostFails()))
          )
        )
      )
    )
  );

  initContentPostList$ = createEffect(() =>
    this._actions.pipe(
      ofType(initializedWithUser, retrieveFriendsSucceeded),
      switchMap(() =>
        this._contentPostService.getContentPosts().pipe(
          map(
            (response) => getContentPostsSucceeds({ response }),
            catchError(() => of(getContentPostsFails()))
          )
        )
      )
    )
  );
}
