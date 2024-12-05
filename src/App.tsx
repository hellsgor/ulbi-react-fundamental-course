import './styles/App.css';

import { initialPosts } from './assets/data/posts';
import { PostList, PostSort } from './components/PostList/PostList';
import { PostForm } from './components/PostForm/PostForm';
import { Post } from './components/PostItem/PostItem';
import { useMemo, useState } from 'react';

function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [selectedSort, setSelectedSort] = useState<PostSort>('id');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortedPosts = useMemo(
    () =>
      [...posts].sort((postA, postB) =>
        String(postA[selectedSort])?.localeCompare(String(postB[selectedSort])),
      ),
    [selectedSort, posts],
  );

  const foundPosts = useMemo(
    () =>
      sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery) ||
          post.body.toLowerCase().includes(searchQuery),
      ),
    [searchQuery, sortedPosts],
  );

  function createPost(newPost: Post): void {
    setPosts([...posts, newPost]);
  }

  function removePost(post: Post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  function sortPost(sort: PostSort) {
    setSelectedSort(sort);
  }

  function searchPost(query: string) {
    setSearchQuery(query.toLowerCase());
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <PostList
        remove={removePost}
        list={foundPosts}
        title="Список постов"
        value={selectedSort}
        onChange={sortPost}
        searchQuery={searchQuery}
        onSearch={searchPost}
      />
    </div>
  );
}

export default App;
