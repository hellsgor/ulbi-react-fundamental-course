import { useMemo } from 'react';
import { Post } from '../components/PostItem/PostItem';
import { PostListFilter } from '../components/PostList/PostList';

export const useSortedPosts = (
  posts: Post[],
  sort: PostListFilter['sort'],
): Post[] =>
  useMemo(
    () =>
      [...posts].sort((postA, postB) =>
        String(postA[sort])?.localeCompare(String(postB[sort])),
      ),
    [sort, posts],
  );

export const useFilteredPosts = (
  posts: Post[],
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
  posts: Post[],
  { sort, query }: PostListFilter,
): Post[] => useFilteredPosts(useSortedPosts(posts, sort), query);
