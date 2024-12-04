import classes from './TextInput.module.css';

import { InputHTMLAttributes, FC } from 'react';
import { generateId } from '../../../utils/generateId';
import { generateClassNames } from '../../../utils/generateClassNames';

export type TextInputModifiers = 'small' | 'horizontal';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  mods?: Record<TextInputModifiers, boolean>;
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
      className={generateClassNames({
        baseClass: classes['text-input'],
        classes,
        mods,
      })}
    >
      {label && <label htmlFor={ids}>{label}</label>}
      <input {...restProps} id={ids} />
    </div>
  );
};
