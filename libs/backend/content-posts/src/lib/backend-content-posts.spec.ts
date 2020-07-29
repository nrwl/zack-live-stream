import { backendContentPosts } from './backend-content-posts';

describe('backendContentPosts', () => {
  it('should work', () => {
    expect(backendContentPosts()).toEqual('backend-content-posts');
  });
});
