import classes from './Button.module.css';

import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { getClassNames } from '../../../utils/generateClassNames';

export type ButtonMods = 'secondary' | 'wide' | 'transparent';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mods?: Partial<Record<ButtonMods, boolean>>;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  mods,
  className,
  ...props
}) => {
  const classNames = [
    getClassNames({
      classes,
      root: classes.button,
      mods,
    }),
    className,
  ]
    .filter((className) => !!className)
    .join(' ');

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};
