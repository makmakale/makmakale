import { coverRotateTimeout } from '@/common/constants/book';
import { useBookContext } from '@/common/context/Book';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useCoverHook = (leftCoverRef) => {
  const { isBookOpened, openBook } = useBookContext();
  const [searchParams] = useSearchParams();
  const activePage = Number(searchParams.get('page'));

  useEffect(() => {
    if (!isBookOpened) return;

    const coverTimeout = setTimeout(() => {
      leftCoverRef.current.classList.add('turn');

      // change zIndex for showing pages above cover
      setTimeout(() => {
        leftCoverRef.current.style.zIndex = 1;
      }, coverRotateTimeout - 500);
    }, coverRotateTimeout - 500);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(coverTimeout);
    };
  }, [isBookOpened]);

  useEffect(() => {
    let openBookIntervalId = null;
    if (activePage > 1 && !isBookOpened) {
      openBookIntervalId = setInterval(() => {
        openBook();
      }, 800);
    }

    return () => {
      clearTimeout(openBookIntervalId);
    };
  }, [activePage, isBookOpened]);
};
