import {
  LeftPage,
  PagesContainer,
  PageWrapper,
  PaginationButton,
  RightPage,
} from '@/common/components/Pages/Pages.styled';
import { bookPages } from '@/common/constants/book';
import { usePages } from '@/common/components/Pages/Pages.hooks';

function Pages() {
  const { handlePrevPage, handleNextPage } = usePages();

  return (
    <PagesContainer>
      <LeftPage />

      {bookPages.map(({ page, title, component: Component }, index) => (
        <RightPage key={`page-${page}`} id="page" data-page-id={page} style={{ zIndex: bookPages.length - index }}>
          <PageWrapper className={`${page % 2 !== 0 ? 'back' : 'front'}`}>
            {Component ? <Component title={title} /> : null}
          </PageWrapper>

          <PaginationButton onClick={page % 2 !== 0 ? handleNextPage : handlePrevPage} />
        </RightPage>
      ))}
    </PagesContainer>
  );
}

export default Pages;
