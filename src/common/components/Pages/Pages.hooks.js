import { useEffect, useState } from 'react';
import { bookPages, initialPage, pagesOnScreen } from '@/common/constants/book';
import { animatePages } from '@/common/components/Pages/Pages.utils';

export const usePages = () => {
  const [, setActivePage] = useState(initialPage);
  const totalPages = bookPages.length;
  const lastPage = totalPages % 2 === 0 ? totalPages + 1 : totalPages;

  function handlePrevPage() {
    setActivePage((prev) => {
      const nextPage = prev - pagesOnScreen < 1 ? 1 : prev - pagesOnScreen;
      animatePages(nextPage, prev);
      return nextPage;
    });
  }

  function handleNextPage() {
    setActivePage((prev) => {
      const nextPage = prev + pagesOnScreen > totalPages ? lastPage : prev + pagesOnScreen;
      animatePages(nextPage, prev);
      return nextPage;
    });
  }

  function moveToPage(pageNumber) {
    setActivePage((prev) => {
      const nextPage = pageNumber % 2 === 0 ? pageNumber + 1 : pageNumber;
      animatePages(nextPage, prev);
      return nextPage;
    });
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      e.preventDefault();

      if (e.code === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.code === 'ArrowRight') {
        handleNextPage();
      } else if (e.code === 'Home') {
        moveToPage(initialPage);
      } else if (e.code === 'End') {
        moveToPage(lastPage);
      }
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return { handlePrevPage, handleNextPage, lastPage };
};
