import classes from './Pagination.module.css';

import { FC } from 'react';
import { Button } from '../UI/Button/Button';
import { Select } from '../UI/Select/Select';

export type PaginationProps = {
  pages: number[];
  current: number;
  setPage: (value: number) => void;
  limit: number;
  changeLimit: (value: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  pages,
  current,
  setPage,
  limit,
  changeLimit,
}) => {
  function setPaginationLimit(limit: string) {
    changeLimit(Number(limit));
  }

  if (!pages.length) {
    pages = [1];
  }

  return (
    <div className={classes.pagination}>
      <div className={classes.pages}>
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

      <Select
        label={'Download by: '}
        mods={{ small: true }}
        options={[
          { value: '20', text: '20' },
          { value: '-1', text: 'all' },
        ]}
        defaultValue={{ value: '10', text: '10' }}
        value={`${limit}`}
        onChange={setPaginationLimit}
      />
    </div>
  );
};
