import classes from './PostList.module.css';

import { FC } from 'react';
import { Post } from '../../types/Post.tsx';
import { PostItem, PostProps } from '../PostItem/PostItem';
import { TextInput } from '../UI/TextInput/TextInput';
import { Select } from '../UI/Select/Select';
import { Button } from '../UI/Button/Button';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

      {list.length ? (
        <TransitionGroup className={classes.postListPosts}>
          {list.map((post) => (
            <CSSTransition key={post.id} timeout={300} classNames="post">
              <PostItem remove={remove} post={post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <p className="post-list__no-posts">Посты не найдены :(</p>
      )}
    </div>
  );
};
