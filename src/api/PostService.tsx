import axios from 'axios';
import { PostList, PostListSchema } from '../types/Post';

export interface PostServiceResponse {
  data: PostList;
  postsCount: string;
}

export default class PostService {
  static async getAll(
    limit: number = 10,
    page: number = 1,
  ): Promise<PostServiceResponse> {
    const response = await axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: limit,
          _page: page,
        },
      })
      .then((response) => {
        if (response.status >= 400) throw new Error();
        return response;
      })
      .then((response) => {
        PostListSchema.parse(response.data);
        return {
          data: response.data,
          postsCount: response.headers['x-total-count'],
        };
      });

    return response;
  }
}
