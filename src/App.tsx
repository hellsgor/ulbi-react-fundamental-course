import { initialPosts } from './assets/data/posts';
import './styles/App.css';
import { PostList } from './components/PostList/PostList';

export function App() {
  return (
    <div className="App">
      <PostList list={initialPosts} title="Список постов" />
    </div>
  );
}

export default App;
