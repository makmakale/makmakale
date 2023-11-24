import { NextPage, PrevPage } from '@/common/components/PageNavigation/PageNavigation.styled';
import PropTypes from 'prop-types';

function PageNavigation(props) {
  const {
    currentPage,
    lastPage,
    handlePrevPage,
    handleNextPage,
  } = props;

  if (currentPage === lastPage) return null;

  if (currentPage % 2 === 0) {
    return (
      <PrevPage onClick={handlePrevPage}>
        <i className="bx bx-chevron-left" />
      </PrevPage>
    );
  }

  return (
    <NextPage onClick={handleNextPage}>
      <i className="bx bx-chevron-right" />
    </NextPage>
  );
}

PageNavigation.propTypes = {
  currentPage: PropTypes.number,
  lastPage: PropTypes.number,
  handlePrevPage: PropTypes.func,
  handleNextPage: PropTypes.func,
};

PageNavigation.defaultProps = {
  currentPage: null,
  lastPage: null,
  handlePrevPage: () => {
  },
  handleNextPage: () => {
  },
};

export default PageNavigation;
