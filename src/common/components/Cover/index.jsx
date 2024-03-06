import { useCoverHook } from '@/common/components/Cover/Cover.hooks';
import { CoverContent, CoverLeft, CoverRight } from '@/common/components/Cover/Cover.styled';
import Pages from '@/common/components/Pages';
import { MY_NAME } from '@/common/constants/common';
import { useBookContext } from '@/common/context/Book';
import useDeviceType from '@/common/hooks/useDeviceType';
import { BookWrapper } from '@/components/Book/Book.styled';
import { useRef } from 'react';

function Cover() {
  const leftCoverRef = useRef(null);
  const { isBookOpened, openBook } = useBookContext();
  const isMobileOrTablet = useDeviceType();

  useCoverHook(leftCoverRef);

  return (
    <BookWrapper open={isBookOpened}>
      <CoverLeft ref={leftCoverRef} onClick={isMobileOrTablet ? null : openBook}>
        <CoverContent>
          <h3>{MY_NAME}</h3>
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
