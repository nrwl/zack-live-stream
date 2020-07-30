import { createAction, props } from '@ngrx/store';
import {
  CreateContentPostRequestBody,
  ContentPost,
} from '@zack-live-stream/content-post-utils';

export const requestCreateNewContentPost = createAction(
  '[Create Content Post Form] Request Create',
  props<{ requestBody: CreateContentPostRequestBody }>()
);

export const createNewContentPostSucceeds = createAction(
  '[Content Post API] Create Content Post Success',
  props<{ response: ContentPost }>()
);

export const createNewContentPostFails = createAction(
  '[Content Post API] Create Content Post Fails'
);

export const initContentPostList = createAction('[Content Post List] Init');

export const getContentPostsSucceeds = createAction(
  '[Content Post API] Get Content Posts Success',
  props<{ response: ContentPost[] }>()
);

export const getContentPostsFails = createAction(
  '[Content Post API] Get Content Posts Fails'
);
