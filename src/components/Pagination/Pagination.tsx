import classes from './Pagination.module.css';

import { FC } from 'react';
import { Button } from '../UI/Button/Button';

export type PaginationProps = {
  pages: number[];
  current: number;
  setPage: (value: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  pages,
  current,
  setPage,
}) => {
  return (
    <div className={classes.pagination}>
      {pages.map((page) => (
        <Button
          key={page}
          mods={{ transparent: true }}
          type="button"
          className={page === current ? classes.active : ''}
          disabled={page === current}
          onClick={() => setPage(page)}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};
