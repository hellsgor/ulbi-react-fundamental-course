import './styles/App.css';

import { PostList, PostListFilter } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';
import { useEffect, useState } from 'react';
import { Modal } from './components/Modal/Modal';
import { usePosts } from './hooks/usePosts';
import { Post } from './types/Post';
import PostService from './api/PostService';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filter, setFilter] = useState<PostListFilter>({
    sort: 'id',
    query: '',
  });
  const [modal, setModal] = useState(false);
  const foundPosts = usePosts(posts, filter);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  function createPost(newPost: Post): void {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post: Post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  async function fetchPosts() {
    try {
      setIsPostsLoading(true);
      setPosts(await PostService.getAll());
      setIsPostsLoading(false);
    } catch (error) {
      console.error(error);
    }
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
        loading={isPostsLoading}
      />
    </div>
  );
}

export default App;
