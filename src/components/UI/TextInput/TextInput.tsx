import classes from './TextInput.module.css';

import { InputHTMLAttributes, FC } from 'react';
import { generateId } from '../../../utils/generateId';
import { getClassNames } from '../../../utils/generateClassNames';

export type TextInputModifiers = 'small' | 'horizontal';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  mods?: Partial<Record<TextInputModifiers, boolean>>;
}

export const TextInput: FC<TextInputProps> = ({
  label,
  id,
  mods,
  ...restProps
}) => {
  const ids: string = id ? id.toString() : generateId('text-input', id);

  return (
    <div
      className={getClassNames({
        mods,
        classes,
        root: classes.textInput,
      })}
    >
      {label && <label htmlFor={ids}>{label}</label>}
      <input {...restProps} id={ids} />
    </div>
  );
};
