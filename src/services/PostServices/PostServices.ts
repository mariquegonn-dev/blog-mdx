import { formatPosts } from '@/functions';
import { allPosts } from '../../../.contentlayer/generated';

export const PostService = {
  getAll: () => {
    const formattedPosts = formatPosts(allPosts);

    return {
      posts: formattedPosts
    };
  }
};
