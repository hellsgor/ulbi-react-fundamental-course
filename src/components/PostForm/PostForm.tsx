import classes from './PostFrom.module.css';

import { FC, useState } from 'react';
import { TextInput } from '../UI/TextInput/TextInput';
import { Button } from '../UI/Button/Button';
import { Post } from '../PostItem/PostItem';

export interface PostFormProps {
  create: (newPost: Post) => void;
}

export const PostForm: FC<PostFormProps> = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  function addPost() {
    create({
      ...post,
      id: Date.now(),
    });

    setPost({ title: '', body: '' });
  }

  return (
    <div className={classes.postForm}>
      <h2>Создать пост</h2>
      <form>
        <TextInput
          placeholder="Заголовок поста"
          type="text"
          name="post-title"
          onChange={(event) => setPost({ ...post, title: event.target.value })}
          value={post.title}
        />

        <TextInput
          placeholder="Текст поста"
          type="text"
          name="post-text"
          onChange={(event) => setPost({ ...post, body: event.target.value })}
          value={post.body}
        />

        <Button onClick={addPost} type="button" mods={{ wide: true }}>
          <span>Создать</span>
        </Button>
      </form>
    </div>
  );
};
