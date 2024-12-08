import axios from 'axios';
import { PostList, PostListSchema } from '../types/Post';

export default class PostService {
  static async getAll(): Promise<PostList> {
    return await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (response.status >= 400) throw new Error();
        return response;
      })
      .then(({ data }) => PostListSchema.parse(data));
  }
}
