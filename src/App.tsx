import './styles/App.css';

import { initialPosts } from './assets/data/posts';
import { PostList, PostListFilter } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';
import { Post } from './components/PostItem/PostItem';
import { useState } from 'react';
import { Modal } from './components/Modal/Modal';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [filter, setFilter] = useState<PostListFilter>({
    sort: 'id',
    query: '',
  });
  const [modal, setModal] = useState(false);
  const foundPosts = usePosts(posts, filter);

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
        setFormVisible={setModal}
      />
    </div>
  );
}

export default App;
