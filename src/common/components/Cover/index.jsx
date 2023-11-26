import { CoverContent, CoverLeft, CoverRight } from '@/common/components/Cover/Cover.styled';
import { coverRotateTimeout, totalPages } from '@/common/constants/book';
import { useEffect, useRef } from 'react';

function Cover() {
  const leftCoverRef = useRef(null);

  useEffect(() => {
    // start left cover with totalPages count + 1 for show it over pages
    leftCoverRef.current.style.zIndex = totalPages + 1;

    const coverTimeout = setTimeout(() => {
      leftCoverRef.current.classList.add('turn');

      // change zIndex for showing pages above cover
      setTimeout(() => {
        leftCoverRef.current.style.zIndex = 1;
      }, 500);
    }, coverRotateTimeout);

    return () => {
      clearTimeout(coverTimeout);
    };
  }, []);

  return (
    <>
      <CoverLeft ref={leftCoverRef}>
        <CoverContent>
          <h3>Maksim Makarenko</h3>
          <h1>Portfolio</h1>
          <p>2023</p>
        </CoverContent>
      </CoverLeft>
      <CoverRight />
    </>
  );
}

export default Cover;
