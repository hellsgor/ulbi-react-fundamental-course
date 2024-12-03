import './styles/App.css';

import { initialPosts } from './assets/data/posts';
import { PostList } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';
import { Post } from './components/PostItem/PostItem';
import { useState } from 'react';

export function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedSort, setSelectedSort] = useState<keyof Post>('id');

  function createPost(newPost: Post): void {
    setPosts([...posts, newPost]);
  }

  function removePost(post: Post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function sortPost(sort: keyof Post) {
    setSelectedSort(sort);
    setPosts(
      [...posts].sort((postA, postB) =>
        String(postA[sort])?.localeCompare(String(postB[sort])),
      ),
    );
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostList
        remove={removePost}
        list={posts}
        title="Список постов"
        value={selectedSort}
        onChange={sortPost}
      />
    </div>
  );
}

export default App;
