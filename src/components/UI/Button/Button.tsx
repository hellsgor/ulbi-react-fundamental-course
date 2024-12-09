import classes from './Button.module.css';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { getClassNames } from '../../../utils/generateClassNames';

export type ButtonMods = 'secondary' | 'wide' | 'transparent';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mods?: Partial<Record<ButtonMods, boolean>>;
}

export const Button: FC<ButtonProps> = ({ children, mods, ...props }) => {
  return (
    <button
      className={getClassNames({
        classes,
        root: classes.button,
        mods,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
