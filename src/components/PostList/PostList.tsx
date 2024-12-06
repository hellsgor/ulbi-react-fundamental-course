import classes from './PostList.module.css';

import { FC } from 'react';
import { Post, PostItem, PostProps } from '../PostItem/PostItem';
import { TextInput } from '../UI/TextInput/TextInput';
import { Select } from '../UI/Select/Select';
import { Button } from '../UI/Button/Button';

export type PostListFilter = {
  sort: keyof Omit<Post, 'userId'>;
  filter: string;
};
interface PostListProps {
  list: Post[];
  title: string;
  remove: PostProps['remove'];
  filter: PostListFilter;
  setFilter: (value: PostListFilter) => void;
  setFormVisible: (value: true) => void;
}

export const PostList: FC<PostListProps> = ({
  list,
  title,
  remove,
  filter,
  setFilter,
  setFormVisible,
}) => {
  return (
    <div className={classes.postList}>
      <h2 style={{ textAlign: 'center' }}>{title}</h2>

      <div className={classes.postListControls}>
        <Select
          options={[
            { value: 'title', text: 'По заголовкам' },
            { value: 'body', text: 'По описанию' },
          ]}
          defaultValue={{ value: 'id', text: 'По дате' }}
          label={'Сортировка:'}
          id={'post-sort'}
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
        />

        <TextInput
          label="Поиск по постам:"
          id="post-search"
          placeholder="Введите запрос"
          mods={{ small: true, horizontal: true }}
          onChange={(event) =>
            setFilter({ ...filter, filter: event.target.value })
          }
          value={filter.filter}
        />

        <Button type="button" onClick={() => setFormVisible(true)}>
          Создать пост
        </Button>
      </div>

      {list.length ? (
        <div className={classes.postListPosts}>
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
