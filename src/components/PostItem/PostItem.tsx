import classes from './PostItem.module.css';

import { FC } from 'react';
import { Button } from '../UI/Button/Button';
import { Post } from '../../types/Post';
import { useNavigate, useLocation } from 'react-router-dom';

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
        <span>{new Date(post.id).toLocaleDateString()}</span>
        <p>{post.body}</p>
      </div>

      <div className={classes.postActions}>
        <Button mods={{ secondary: true }} onClick={goToPost}>
          Открыть
        </Button>
        <Button mods={{ danger: true }} onClick={() => remove(post)}>
          Удалить
        </Button>
      </div>
    </div>
  );
};
