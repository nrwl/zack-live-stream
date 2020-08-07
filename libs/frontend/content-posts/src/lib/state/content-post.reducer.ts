import { createReducer, on } from '@ngrx/store';
import { ContentPost } from '@zack-live-stream/content-post-utils';
import { EntityState } from '@ngrx/entity';
import {
  contentPostInitialState,
  requestCreateNewContentPost,
  createNewContentPostSucceeds,
  contentPostEntityAdapter,
  getContentPostsSucceeds,
} from '@zack-live-stream/frontend/our-circle-ngrx-utils';

export const reducer = createReducer<EntityState<ContentPost>>(
  contentPostInitialState,
  on(createNewContentPostSucceeds, (state, { response }) =>
    contentPostEntityAdapter.addOne(response, state)
  ),
  on(getContentPostsSucceeds, (state, { response }) =>
    contentPostEntityAdapter.addMany(response, state)
  )
);
