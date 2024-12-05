import { FC } from 'react';
import { Post, PostItem, PostProps } from '../PostItem/PostItem';
import classes from './PostList.module.css';
import { PostSort, PostSortProps } from '../PostSort/PostSort';
import { TextInput } from '../UI/TextInput/TextInput';

interface PostListProps extends PostSortProps {
  list: Post[];
  title: string;
  remove: PostProps['remove'];
  searchQuery: string;
  onSearch: (value: string) => void;
}

export const PostList: FC<PostListProps> = ({
  list,
  title,
  remove,
  value,
  onChange,
  searchQuery,
  onSearch,
}) => {
  return (
    <div className={classes['post-list']}>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>

      <div className={classes['post-list__controls']}>
        <PostSort value={value} onChange={onChange} />
        <TextInput
          label="Поиск по постам:"
          id="post-search"
          placeholder="Введите запрос"
          mods={{ small: true, horizontal: true }}
          onChange={(event) => onSearch(event.target.value)}
          value={searchQuery}
        />
      </div>

      {list.length ? (
        <div className={classes['post-list__posts']}>
          {list.map((post) => (
            <PostItem remove={remove} post={post} key={post.id} />
          ))}
        </div>
      ) : (
        <p className="post-list__no-posts">Посты не найдены :(</p>
      )}
    </div>
  );
};
