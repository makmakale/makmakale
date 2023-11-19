import PageContent from '@/common/components/PageContent';
import PropTypes from 'prop-types';

function BlankPage({ title }) {
  return (
    <PageContent title={title}>
      BlankPage
    </PageContent>
  );
}

BlankPage.propTypes = {
  title: PropTypes.string,
};

BlankPage.defaultProps = {
  title: null,
};

export default BlankPage;
