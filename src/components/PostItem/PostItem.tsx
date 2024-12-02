import { FC } from 'react';
import './PostItem.css';
import { Button } from '../UI/Button/Button';

export interface PostProps {
  post: Post;
  remove: (post: Post) => void;
}

export type Post = {
  id: number;
  title: string;
  body: string;
  userId?: number;
};

export const PostItem: FC<PostProps> = ({ post, remove }) => {
  return (
    <div className="post" data-post-id={post.id}>
      <span className="post__id">id: {post.id}</span>

      <div className="post__content" id={`${post.id}`}>
        <strong>{post.title}</strong>
        <div>{post.body}</div>
      </div>

      <div className="post__btns">
        <Button mods={['secondary']} onClick={() => remove(post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};
