import classes from './PostItem.module.css';

import { FC } from 'react';
import { Button } from '../UI/Button/Button';
import { Post } from '../../types/Post';
import { useNavigate, useLocation } from 'react-router-dom';
import { getDate } from '../../utils/getDate';

export interface PostProps {
  post: Post;
  remove: (post: Post) => void;
}

export const PostItem: FC<PostProps> = ({ post, remove }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function goToPost() {
    navigate(`${pathname}/${post.id}`);
  }

  return (
    <div className={classes.post} data-post-id={post.id}>
      <span className={classes.postId}>id: {post.id}</span>

      <div className={classes.postContent} id={`${post.id}`}>
        <strong>{post.title}</strong>
        <span>{getDate(post.id, 'en-US')}</span>
        <p>{post.body}</p>
      </div>

      <div className={classes.postActions}>
        <Button mods={{ secondary: true, wide: true }} onClick={goToPost}>
          Open post
        </Button>
        <Button
          mods={{ danger: true, wide: true }}
          onClick={() => remove(post)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
