import { initialPosts } from './assets/data/posts';
import './styles/App.css';
import { PostList } from './components/PostList/PostList';
import { Button } from './components/UI/Button/Button';

export function App() {
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Заголовок поста" />
        <input type="text" placeholder="Текст поста" />
        <Button>
          <span>Создать пост</span>
        </Button>
      </form>

      <PostList list={initialPosts} title="Список постов" />
    </div>
  );
}

export default App;
