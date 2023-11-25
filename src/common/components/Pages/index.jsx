import {
  LeftPage, PagesContainer, PageWrapper, RightPage,
} from '@/common/components/Pages/Pages.styled';
import { bookPages } from '@/common/constants/book';
import { usePages } from '@/common/components/Pages/Pages.hooks';
import PageNavigation from '@/common/components/PageNavigation';
import IntroPage from '@/components/Pages/Intro';

function Pages() {
  const { handlePrevPage, handleNextPage, lastPage } = usePages();

  return (
    <PagesContainer>
      <LeftPage>
        <PageWrapper>
          <IntroPage />
        </PageWrapper>
      </LeftPage>

      {bookPages.map(({ page, component: Component, ...rest }, index) => (
        <RightPage
          key={`page-${page}`}
          id="page"
          data-page-id={page}
          className={index + 1 === bookPages.length ? '' : 'turn'}
        >
          <PageWrapper className={`${page % 2 === 0 ? 'front' : 'back'}`}>
            {Component ? <Component {...rest} /> : null}
          </PageWrapper>

          <PageNavigation
            currentPage={page}
            lastPage={lastPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />

        </RightPage>
      ))}
    </PagesContainer>
  );
}

export default Pages;
