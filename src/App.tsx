import { initialPosts } from './assets/data/posts';
import './styles/App.css';
import { PostList } from './components/PostList/PostList';
import { Button } from './components/UI/Button/Button';
import { TextInput } from './components/UI/TextInput/TextInput';

export function App() {
  return (
    <div className="App">
      <form style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
        <TextInput
          placeholder="Заголовок поста"
          type="text"
          name="post-title"
        />
        <TextInput placeholder="Текст поста" type="text" name="post-text" />
        <Button>
          <span>Создать пост</span>
        </Button>
      </form>

      <PostList list={initialPosts} title="Список постов" />
    </div>
  );
}

export default App;
