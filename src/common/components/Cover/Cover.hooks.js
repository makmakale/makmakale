import { useEffect } from 'react';
import { useBookContext } from '@/common/context/Book';
import { coverRotateTimeout } from '@/common/constants/book';

export const useCoverHook = (leftCoverRef) => {
  const { isBookOpened } = useBookContext();

  useEffect(() => {
    if (!isBookOpened) return;

    const coverTimeout = setTimeout(() => {
      leftCoverRef.current.classList.add('turn');

      // change zIndex for showing pages above cover
      setTimeout(() => {
        leftCoverRef.current.style.zIndex = 1;
      }, coverRotateTimeout - 500);
    }, coverRotateTimeout - 500);

    return () => {
      clearTimeout(coverTimeout);
    };
  }, [isBookOpened]);
};
