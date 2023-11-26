import { Page, PagesContainer, PageWrapper } from '@/common/components/Pages/Pages.styled';
import { bookPages, totalPages } from '@/common/constants/book';
import { usePages } from '@/common/components/Pages/Pages.hooks';
import PageNavigation from '@/common/components/PageNavigation';

function Pages() {
  const { handlePrevPage, handleNextPage } = usePages();

  return (
    <PagesContainer>
      {bookPages.map(({ page, component: Component, ...rest }, index) => (
        <Page
          key={`page-${page}`}
          id="page"
          data-page-id={page}
          style={{ zIndex: totalPages - index }}
        >
          <PageWrapper className={`${page % 2 === 0 ? 'front' : 'back'}`}>
            {Component ? <Component {...rest} /> : null}
          </PageWrapper>

          <PageNavigation
            currentPage={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />

        </Page>
      ))}
    </PagesContainer>
  );
}

export default Pages;
