import {
  LeftPage,
  PagesContainer,
  PageWrapper,
  PaginationButton,
  RightPage,
} from '@/common/components/Pages/Pages.styled';
import { bookPages } from '@/common/constants/book';
import { usePages } from '@/common/components/Pages/Pages.hooks';
import PageContent from '@/common/components/PageContent';

function Pages() {
  const { handlePrevPage, handleNextPage, moveToPage } = usePages();

  return (
    <PagesContainer>
      <LeftPage>
        <PageWrapper className="back">
          <PageContent title="Content">
            {bookPages.map(({ page, title }) => (
              <button key={page} type="button" onClick={() => moveToPage(page)}>
                {title ?? `Page ${page}`}
              </button>
            ))}
          </PageContent>
        </PageWrapper>
      </LeftPage>

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
