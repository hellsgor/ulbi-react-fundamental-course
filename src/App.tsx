import './styles/App.css';

import { initialPosts } from './assets/data/posts';
import { PostList } from './components/PostList/PostList';
import { Button } from './components/UI/Button/Button';
import { TextInput } from './components/UI/TextInput/TextInput';
import { useState } from 'react';

export function App() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function addPost() {
    console.log(title);
    console.log(text);
  }

  return (
    <div className="App">
      <form style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
        <TextInput
          placeholder="Заголовок поста"
          type="text"
          name="post-title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />

        <TextInput
          placeholder="Текст поста"
          type="text"
          name="post-text"
          onChange={(event) => setText(event.target.value)}
          value={text}
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
