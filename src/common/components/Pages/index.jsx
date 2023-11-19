import {
  LeftPage,
  PageContent,
  PagesContainer,
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

      {bookPages.map((page, index) => (
        <RightPage key={page} id="page" data-page-id={page} zIndex={bookPages.length - index}>
          <PageContent className={`${page % 2 !== 0 ? 'back' : 'front'}`}>
            <div>
              Page
              {' '}
              {page}
            </div>
          </PageContent>

          <PaginationButton onClick={page % 2 !== 0 ? handleNextPage : handlePrevPage} />
        </RightPage>
      ))}

    </PagesContainer>
  );
}

export default Pages;
