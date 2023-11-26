import { CoverContent, CoverLeft, CoverRight } from '@/common/components/Cover/Cover.styled';
import { useRef } from 'react';
import { useCoverHook } from '@/common/components/Cover/Cover.hooks';
import { useBookContext } from '@/common/context/Book';

function Cover() {
  const leftCoverRef = useRef(null);

  useCoverHook(leftCoverRef);

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
