import { CoverLeft, CoverRight } from '@/common/components/Cover/Cover.styled';
import { bookPages, coverRotateTimeout } from '@/common/constants/book';
import { useEffect, useState } from 'react';

function Cover() {
  const totalPages = bookPages.length;
  const [initIndex, setInitIndex] = useState(totalPages + 1);
  const [className, setClassName] = useState(null);

  useEffect(() => {
    setClassName('turn');
    const tId = setTimeout(() => {
      setInitIndex(0);
    }, coverRotateTimeout);

    return () => {
      clearTimeout(tId);
    };
  }, []);

  return (
    <>
      <CoverLeft style={{ zIndex: initIndex }} className={className} />
      <CoverRight />
    </>
  );
}

export default Cover;
