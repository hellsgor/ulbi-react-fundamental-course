import { useMemo } from 'react';

import { PostListFilter } from '../components/PostList/PostList';
import { PostList } from '../types/Post';

export const useSortedPosts = (
  posts: PostList,
  sort: PostListFilter['sort'],
): PostList =>
  useMemo(
    () =>
      [...posts].sort((postA, postB) =>
        String(postA[sort])?.localeCompare(String(postB[sort])),
      ),
    [sort, posts],
  );

export const useFilteredPosts = (
  posts: PostList,
  query: PostListFilter['query'],
) =>
  useMemo(
    () =>
      posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.body.toLowerCase().includes(query),
      ),
    [query, posts],
  );

export const usePosts = (
  posts: PostList,
  { sort, query }: PostListFilter,
): PostList => useFilteredPosts(useSortedPosts(posts, sort), query);
