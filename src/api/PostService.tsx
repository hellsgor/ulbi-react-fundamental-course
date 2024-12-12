import axios, { AxiosResponse } from 'axios';
import { Post, PostList, PostListSchema, PostSchema } from '../types/Post';
import { ZodSchema } from 'zod';
import { CommentListSchema, CommentListType } from '../types/Comment';

export interface PostServiceFetch {
  url: string;
  schema: ZodSchema;
  params?: Record<string, unknown>;
}

export interface PostServiceResponseAll {
  data: PostList;
  postsCount: string;
}

export default class PostService {
  private static API_URL: string = 'https://jsonplaceholder.typicode.com';
  private static ENDPOINTS: Record<string, string> = {
    posts: '/posts',
    comments: '/comments',
  };

  private static async fetchData<T>(
    url: string,
    schema: ZodSchema<T>,
    params?: Record<string, unknown>,
  ): Promise<AxiosResponse<T>> {
    const response = await axios
      .get(url, params)
      .then((response) => {
        if (response.status >= 400) throw new Error();
        return response;
      })
      .then((response) => {
        schema.parse(response.data);
        return response;
      });

    return response;
  }

  static async getAll(
    limit: number = 10,
    page: number = 1,
  ): Promise<PostServiceResponseAll> {
    const response = await this.fetchData(
      `${this.API_URL}${this.ENDPOINTS.posts}`,
      PostListSchema,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      },
    );

    return {
      data: response.data,
      postsCount: response.headers['x-total-count'],
    };
  }

  static async getById(id: string): Promise<Post> {
    const response = await this.fetchData(
      `${this.API_URL}${this.ENDPOINTS.posts}/${id}`,
      PostSchema,
    );

    return response.data;
  }

  static async getComments(id: string): Promise<CommentListType> {
    const response = await this.fetchData(
      `${this.API_URL}${this.ENDPOINTS.posts}/${id}${this.ENDPOINTS.comments}`,
      CommentListSchema,
    );

    return response.data;
  }
}
