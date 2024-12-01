import { FC } from 'react';
import './PostItem.css';

export interface PostItemProps {
  post: PostItem;
}

export type PostItem = {
  id: number;
  title: string;
  body: string;
  userId?: number;
};

export const PostItem: FC<PostItemProps> = ({ post }) => {
  return (
    <div className="post" data-post-id={post.id}>
      <span className="post__id">id: {post.id}</span>

      <div className="post__content" id={`${post.id}`}>
        <strong>{post.title}</strong>
        <div>{post.body}</div>
      </div>

      <div className="post__btns">
        <button>Удалить</button>
      </div>
    </div>
  );
};
