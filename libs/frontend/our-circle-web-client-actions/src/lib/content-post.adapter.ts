import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { ContentPost } from '@zack-live-stream/content-post-utils';

export const contentPostEntityAdapter = createEntityAdapter<ContentPost>({
  selectId: (contentPost) => contentPost.id,
});

export const contentPostInitialState: EntityState<ContentPost> = contentPostEntityAdapter.getInitialState();
