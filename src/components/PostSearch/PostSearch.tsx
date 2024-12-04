import { TextInput } from '../UI/TextInput/TextInput';

export const PostSearch = () => {
  return (
    <TextInput
      label="Поиск по постам:"
      id="post-search"
      placeholder="Введите запрос"
      mods={{ small: true, horizontal: true }}
    />
  );
};
