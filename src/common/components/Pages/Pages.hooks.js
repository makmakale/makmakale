import { useEffect, useState } from 'react';
import { bookPages, initialPage, pagesOnScreen } from '@/common/constants/book';

export const usePages = () => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = bookPages.length;

  function changePage(pageNumber) {
    const pages = document.querySelectorAll('#page');

    pages.forEach((page, index) => {
      const pNumber = Number(page.dataset.pageId);

      if (pNumber >= pageNumber) {
        page.classList.remove('turn');
        setTimeout(() => {
          page.style.zIndex = pages.length - index;
        }, 500);
      } else {
        page.classList.add('turn');
        setTimeout(() => {
          page.style.zIndex = pages.length + index;
        }, 500);
      }
    });
  }

  function handlePrevPage() {
    setCurrentPage((prev) => {
      const prevPage = prev - pagesOnScreen < 1 ? 1 : prev - pagesOnScreen;
      changePage(prevPage);
      return prevPage;
    });
  }

  function handleNextPage() {
    setCurrentPage((prev) => {
      const lastPage = totalPages % 2 === 0 ? totalPages + 1 : totalPages;
      const nextPage = prev + pagesOnScreen > totalPages ? lastPage : prev + pagesOnScreen;
      changePage(nextPage);
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
      }
    };

    document.addEventListener('keyup', handleKeyPress);

    return () => {
      document.removeEventListener('keyup', handleKeyPress);
    };
  }, []);

  return { currentPage, handlePrevPage, handleNextPage };
};
