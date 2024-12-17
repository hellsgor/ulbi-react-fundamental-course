import classes from './PostList.module.css';

import { FC, useEffect, useRef } from 'react';
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
  setPage: () => void;
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
  setPage,
}) => {
  const lastElement = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    if (loading) return;

    const callback = function (entries, observer) {
      console.log(entries[0]);
      if (entries[0].isIntersecting) {
        console.log('элемент виден');
        setPage();
      }
    };

    observer.current = new IntersectionObserver(callback, { threshold: 1 });
    if (lastElement.current) observer.current.observe(lastElement.current);
  }, [loading]);

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

      {list.length ? (
        list.map((post) => (
          <PostItem remove={remove} post={post} key={post.id} />
        ))
      ) : error ? (
        <ErrorView error={error} />
      ) : (
        !loading && <p className={classes.notFound}>Posts are not found :(</p>
      )}

      {loading && <Loader />}

      <div
        ref={lastElement}
        style={{ height: '1px', backgroundColor: 'transparent' }}
      />
    </div>
  );
};
