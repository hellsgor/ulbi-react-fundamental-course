import classes from './ErrorView.module.css';

import { FC } from 'react';

export const ErrorView: FC<{ error: Error | null }> = ({ error = null }) => {
  if (!error?.message) return;

  return (
    <p className={classes.error}>
      An error occurred: {error?.message ? error.message : 'Unknown error'}
    </p>
  );
};
