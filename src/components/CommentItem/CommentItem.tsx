import classes from './CommentItem.module.css';

import { FC } from 'react';
import { Comment } from '../../types/Comment';

export type CommentItemProps = {
  comment: Comment;
};

export const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className={classes.comment}>
      <span className={classes.id}>{comment.id}</span>

      <h4>{comment.name}</h4>
      <span className={classes.author}>
        <a href={`mailto:${comment.email}`}>{comment.email}</a>
      </span>

      <p className={classes.body}>{comment.body}</p>
    </div>
  );
};
