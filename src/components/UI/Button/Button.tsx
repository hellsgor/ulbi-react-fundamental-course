import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classes from './Button.module.css';

export type ButtonMods = 'secondary';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mods?: Array<ButtonMods>;
}

export const Button: FC<ButtonProps> = ({ children, mods, ...props }) => {
  const classesStr: string = [
    classes.button,
    ...(mods?.map((mod) => classes[`button_${mod}`]) || []),
  ].join(' ');

  return (
    <button className={classesStr} {...props}>
      {children}
    </button>
  );
};
