import { FC } from 'react';
import { PostItem } from '../PostItem/PostItem';
import './PostList.css';

interface PostListProps {
  list: PostItem[];
  title: string;
}

export const PostList: FC<PostListProps> = ({ list, title }) => {
  return (
    <div className="post-list">
      <h2 style={{ textAlign: 'center', marginBottom: '16px' }}>{title}</h2>

      <div className="post-list__posts">
        {list.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};
