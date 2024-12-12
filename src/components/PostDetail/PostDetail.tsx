import classes from './PostDetail.module.css';

import { FC } from 'react';
import { Post } from '../../types/Post';
import { getDate } from '../../utils/getDate';

export interface PostDetailProps {
  post: Post;
}

export const PostDetail: FC<PostDetailProps> = ({ post }) => {
  return (
    <div className={classes.postDetail}>
      <h1>You opened the post with ID = {post.id}</h1>

      <div className={classes.dataContainer}>
        <span>Title:</span>
        <h2>{post.title}</h2>
      </div>

      <div className={classes.dataContainer}>
        <span>Date:</span>
        <p>{getDate(post.id, 'en-US')}</p>
      </div>

      <div className={classes.dataContainer}>
        <span>Description:</span>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
