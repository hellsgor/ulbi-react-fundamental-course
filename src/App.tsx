import './styles/App.css';

import { initialPosts } from './assets/data/posts';
import { PostList } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';
import { PostItem } from './components/PostItem/PostItem';
import { useState } from 'react';

export function App() {
  const [posts, setPosts] = useState(initialPosts);

  function createPost(newPost: PostItem): void {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostList list={posts} title="Список постов" />
    </div>
  );
}

export default App;
