import { useState } from 'react';

type FetchingCallback<T extends unknown[]> = (...args: T) => Promise<void>;

export const useFetching = <T extends unknown[]>(
  callback: FetchingCallback<T>,
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetching = async (...args: T) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error(`${error}`));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
