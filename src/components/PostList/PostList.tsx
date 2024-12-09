import classes from './PostList.module.css';

import { FC } from 'react';
import { Post } from '../../types/Post.tsx';
import { PostItem, PostProps } from '../PostItem/PostItem';
import { TextInput } from '../UI/TextInput/TextInput';
import { Select } from '../UI/Select/Select';
import { Button } from '../UI/Button/Button';
import { Loader } from '../UI/Loader/Loader.tsx';

export type PostListFilter = {
  sort: keyof Omit<Post, 'userId'>;
  query: string;
};

interface PostListProps {
  list: Post[];
  title: string;
  remove: PostProps['remove'];
  filter: PostListFilter;
  setFilter: (value: PostListFilter) => void;
  setFormVisible: (value: true) => void;
  loading: boolean;
  error: Error | null;
}

export const PostList: FC<PostListProps> = ({
  list,
  title,
  remove,
  filter,
  setFilter,
  setFormVisible,
  loading,
  error,
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
          mods={{ horizontal: true }}
          onChange={(event) =>
            setFilter({ ...filter, query: event.target.value })
          }
          value={filter.query}
        />

        <Button type="button" onClick={() => setFormVisible(true)}>
          Создать пост
        </Button>
      </div>

      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px',
          }}
        >
          <Loader />
        </div>
      ) : list.length ? (
        list.map((post) => (
          <PostItem remove={remove} post={post} key={post.id} />
        ))
      ) : error ? (
        <p className={classes.error}>
          Произошла ошибка:{' '}
          {error?.message ? error.message : 'Неизвестная ошибка'}
        </p>
      ) : (
        <p>Посты не найдены :(</p>
      )}
    </div>
  );
};
