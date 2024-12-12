import classes from './CommentList.module.css';

import { FC } from 'react';
import { CommentListType } from '../../types/Comment';
import { CommentItem } from '../CommentItem/CommentItem';

export type CommentListProps = {
  comments: CommentListType;
};

export const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <div className={classes.commentList}>
      <h3>Post comments:</h3>

      <div className={classes.comments}>
        {comments.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </div>
    </div>
  );
};
