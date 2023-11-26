import { CoverContent, CoverLeft, CoverRight } from '@/common/components/Cover/Cover.styled';
import { useRef } from 'react';
import { useBookContext } from '@/common/context/Book';
import { BookWrapper } from '@/components/Book/Book.styled';
import { useCoverHook } from '@/common/components/Cover/Cover.hooks';
import Pages from '@/common/components/Pages';

function Cover() {
  const leftCoverRef = useRef(null);
  const { isBookOpened, openBook } = useBookContext();

  useCoverHook(leftCoverRef);

  return (
    <BookWrapper open={isBookOpened}>
      <CoverLeft ref={leftCoverRef} onClick={openBook}>
        <CoverContent>
          <h3>Maksim Makarenko</h3>
          <h1>Portfolio</h1>
          <p>2023</p>
        </CoverContent>
      </CoverLeft>

      <Pages />

      <CoverRight />
    </BookWrapper>
  );
}

export default Cover;
