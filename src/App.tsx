import './styles/App.css';

import { initialPosts } from './assets/data/posts';
import { PostList } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';
import { Post } from './components/PostItem/PostItem';
import { useState } from 'react';

export function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedSort, setSelectedSort] = useState<keyof Post>('id');

  const sortedPosts = [...posts].sort((postA, postB) =>
    String(postA[selectedSort])?.localeCompare(String(postB[selectedSort])),
  );

  function createPost(newPost: Post): void {
    setPosts([...posts, newPost]);
  }

  function removePost(post: Post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function sortPost(sort: keyof Post) {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostList
        remove={removePost}
        list={sortedPosts}
        title="Список постов"
        value={selectedSort}
        onChange={sortPost}
      />
    </div>
  );
}

export default App;
