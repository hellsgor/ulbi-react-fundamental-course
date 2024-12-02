import { FC } from 'react';
import { Post, PostItem, PostProps } from '../PostItem/PostItem';
import classes from './PostList.module.css';

interface PostListProps {
  list: Post[];
  title: string;
  remove: PostProps['remove'];
}

export const PostList: FC<PostListProps> = ({ list, title, remove }) => {
  const postListContent = (
    <>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>

      <div className="post-list__posts">
        {list.map((post) => (
          <PostItem remove={remove} post={post} key={post.id} />
        ))}
      </div>
    </>
  );

  return (
    <div className={classes['post-list']}>
      {list.length ? (
        postListContent
      ) : (
        <p className="post-list__no-posts">Посты не найдены :(</p>
      )}
    </div>
  );
};
