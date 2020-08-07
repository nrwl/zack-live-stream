import { createFeatureSelector, createSelector } from '@ngrx/store';
import { contentPostEntityAdapter } from './content-post.adapter';

export const contentPostState = createFeatureSelector('content-posts');

export const selectAllPosts = createSelector(
  contentPostState,
  contentPostEntityAdapter.getSelectors().selectAll
);
