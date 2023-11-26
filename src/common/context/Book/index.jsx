import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const BookContext = createContext();

export const useBookContext = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('Component must be rendered as child component of BookContext');
  }

  return context;
};

export function BookProvider({ children }) {
  const [isBookOpened, setBookOpened] = useState(false);

  function openBook() {
    setBookOpened(true);
  }

  return (
    <BookContext.Provider value={{ isBookOpened, openBook }}>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.node,
};

BookProvider.defaultProps = {
  children: null,
};
