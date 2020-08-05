import { Injectable } from '@angular/core';
import { ContentPostService } from '../content-post.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  requestCreateNewContentPost,
  createNewContentPostSucceeds,
  createNewContentPostFails,
  initContentPostList,
  getContentPostsSucceeds,
  getContentPostsFails,
  loginSucceeded,
} from '@zack-live-stream/frontend/our-circle-web-client-actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

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
      ofType(loginSucceeded),
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
