import classes from './PostList.module.css';

import { FC } from 'react';
import { Post } from '../../types/Post.tsx';
import { PostItem, PostProps } from '../PostItem/PostItem';
import { TextInput } from '../UI/TextInput/TextInput';
import { Select } from '../UI/Select/Select';
import { Button } from '../UI/Button/Button';
import { Loader } from '../UI/Loader/Loader.tsx';
import { ErrorView } from '../UI/ErrorView/ErrorView.tsx';

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
            { value: 'title', text: 'by headlines' },
            { value: 'body', text: 'by descriptions' },
          ]}
          defaultValue={{ value: 'id', text: 'by date' }}
          label={'sort:'}
          id={'post-sort'}
          value={filter.sort}
          onChange={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
        />

        <TextInput
          label="search:"
          id="post-search"
          placeholder="write query"
          mods={{ horizontal: true }}
          onChange={(event) =>
            setFilter({ ...filter, query: event.target.value })
          }
          value={filter.query}
        />

        <Button type="button" onClick={() => setFormVisible(true)}>
          Add post
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : list.length ? (
        list.map((post) => (
          <PostItem remove={remove} post={post} key={post.id} />
        ))
      ) : error ? (
        <ErrorView error={error} />
      ) : (
        <p className={classes.notFound}>Posts are not found :(</p>
      )}
    </div>
  );
};
