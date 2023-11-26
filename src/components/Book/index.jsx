import { BookWrapper } from '@/components/Book/Book.styled';
import { BookProvider } from '@/common/context/Book';
import Cover from '@/common/components/Cover';
import Pages from '@/common/components/Pages';

function Book() {
  return (
    <BookWrapper>
      <BookProvider>
        <Cover />
        <Pages />
      </BookProvider>
    </BookWrapper>
  );
}

export default Book;
