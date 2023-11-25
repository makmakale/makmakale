import { BookWrapper } from '@/components/Book/Book.styled';
import Cover from '@/common/components/Cover';
import Pages from '@/common/components/Pages';

function Book() {
  return (
    <BookWrapper>
      <Cover />
      <Pages />
    </BookWrapper>
  );
}

export default Book;
