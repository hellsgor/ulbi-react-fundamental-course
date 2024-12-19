import { MutableRefObject, useEffect, useRef } from 'react';

export const useObserver = (
  ref: MutableRefObject<Element | null>,
  isLoading: boolean,
  callback: () => void,
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    if (isLoading) return;

    const cb: IntersectionObserverCallback = function (entries) {
      if (entries[0].isIntersecting) {
        callback();
      }
    };

    observer.current = new IntersectionObserver(cb, { threshold: 1 });
    if (ref.current) observer.current.observe(ref.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [isLoading, callback, ref]);
};
