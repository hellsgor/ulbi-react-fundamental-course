import './styles/App.css';

import { initialPosts } from './assets/data/posts';
import { PostList, PostListFilter } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';
import { Post } from './components/PostItem/PostItem';
import { useMemo, useState } from 'react';
import { Modal } from './components/Modal/Modal';

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filter, setFilter] = useState<PostListFilter>({
    sort: 'id',
    filter: '',
  });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(
    () =>
      [...posts].sort((postA, postB) =>
        String(postA[filter.sort])?.localeCompare(String(postB[filter.sort])),
      ),
    [filter.sort, posts],
  );

  const foundPosts = useMemo(
    () =>
      sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(filter.filter) ||
          post.body.toLowerCase().includes(filter.filter),
      ),
    [filter.filter, sortedPosts],
  );

  function createPost(newPost: Post): void {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post: Post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  return (
    <div className="App">
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>

      <PostList
        remove={removePost}
        list={foundPosts}
        title="Список постов"
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
