import classes from './Button.module.css';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { generateClassNames } from '../../../utils/generateClassNames';

export type ButtonMods = 'secondary';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mods?: Record<ButtonMods, boolean>;
}

export const Button: FC<ButtonProps> = ({ children, mods, ...props }) => {
  return (
    <button
      className={generateClassNames({
        classes,
        baseClass: classes.button,
        mods,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
