import { FC, InputHTMLAttributes } from 'react';
import classes from './TextInput.module.css';

export const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return <input {...props} className={classes['text-input']} />;
};
