import { useEffect } from 'react';
import {
  bookPages, coverRotateTimeout, initialPage, pagesOnScreen,
} from '@/common/constants/book';
import { animatePages } from '@/common/components/Pages/Pages.utils';
import { useSearchParams } from 'react-router-dom';

export const usePages = () => {
  const totalPages = bookPages.length;
  const lastPage = totalPages % 2 === 0 ? totalPages + 1 : totalPages;

  const [searchParams, setSearchParams] = useSearchParams({ page: initialPage.toString() });
  const activePage = Number(searchParams.get('page'));

  function handlePrevPage() {
    setSearchParams((prev) => {
      const prevPage = Number(prev.get('page'));
      const nextPage = prevPage - pagesOnScreen < 1 ? 1 : prevPage - pagesOnScreen;
      animatePages(nextPage, prevPage);
      prev.set('page', nextPage.toString());
      return prev;
    }, { replace: true });
  }

  function handleNextPage() {
    setSearchParams((prev) => {
      const prevPage = Number(prev.get('page'));
      const nextPage = prevPage + pagesOnScreen > totalPages ? lastPage : prevPage + pagesOnScreen;
      animatePages(nextPage, prevPage);
      prev.set('page', nextPage.toString());
      return prev;
    }, { replace: true });
  }

  function moveToPage(pageNumber) {
    setSearchParams((prev) => {
      const prevPage = Number(prev.get('page'));
      const nextPage = pageNumber % 2 === 0 ? pageNumber + 1 : pageNumber;
      animatePages(nextPage, prevPage);
      prev.set('page', nextPage.toString());
      return prev;
    }, { replace: true });
  }

  function initialAnimation() {
    let initPage = activePage;

    if (activePage > lastPage) {
      initPage = lastPage;
    } else if (activePage < initialPage) {
      initPage = initialPage;
    } else {
      initPage = activePage % 2 === 0 ? activePage + 1 : activePage;
    }

    if (initPage !== activePage) {
      setSearchParams((prev) => {
        prev.set('page', initPage.toString());
        animatePages(initPage, lastPage);
        return prev;
      });
    } else {
      animatePages(initPage, initialPage);
    }
  }

  useEffect(() => {
    const coverTimeout = setTimeout(() => {
      initialAnimation();
    }, coverRotateTimeout - 800);
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
      clearTimeout(coverTimeout);
    };
  }, []);

  return { handlePrevPage, handleNextPage, lastPage };
};
