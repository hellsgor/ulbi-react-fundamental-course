import { forwardRef, InputHTMLAttributes } from 'react';
import classes from './TextInput.module.css';

export const TextInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input {...props} ref={ref} className={classes['text-input']} />;
});
