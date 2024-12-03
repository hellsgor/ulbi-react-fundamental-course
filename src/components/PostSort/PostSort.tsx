import { Post } from '../PostItem/PostItem';
import { Select, SelectProps } from '../UI/Select/Select';

export type PostSortProps = {
  value: keyof Post;
  onChange: (value: keyof Post) => void;
};

export const PostSort = ({ value, onChange }: PostSortProps) => {
  const props: Omit<SelectProps<keyof Post>, 'value' | 'onChange'> = {
    options: [
      { value: 'title', text: 'По заголовкам' },
      { value: 'body', text: 'По описанию' },
    ],
    defaultValue: { value: 'id', text: 'По дате' },
    label: 'Сортировка:',
    id: 'post-sort',
  };

  return (
    <div className="">
      <Select
        options={props.options}
        defaultValue={props.defaultValue}
        label={props.label}
        id={props.id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
