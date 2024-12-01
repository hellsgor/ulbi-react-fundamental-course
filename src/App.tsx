import { initialPosts } from './assets/data/posts';
import './styles/App.css';
import { PostList } from './components/PostList/PostList';
import { Button } from './components/UI/Button/Button';
import { TextInput } from './components/UI/TextInput/TextInput';
import { useRef } from 'react';

export function App() {
  const postTitleInput = useRef<HTMLInputElement | null>(null);
  const postTextInput = useRef<HTMLInputElement | null>(null);

  function addPost() {
    console.log(postTitleInput.current?.value);
    console.log(postTextInput.current?.value);
  }

  return (
    <div className="App">
      <form style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
        <TextInput
          ref={postTitleInput}
          placeholder="Заголовок поста"
          type="text"
          name="post-title"
        />
        <TextInput
          ref={postTextInput}
          placeholder="Текст поста"
          type="text"
          name="post-text"
        />
        <Button onClick={addPost} type="button">
          <span>Создать пост</span>
        </Button>
      </form>

      <PostList list={initialPosts} title="Список постов" />
    </div>
  );
}

export default App;
