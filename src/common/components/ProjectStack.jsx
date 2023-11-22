import { SectionTitle } from '@/common/components/Experience';
import PropTypes from 'prop-types';
import { Chip } from '@/common/components/Chip';
import Divider from '@/common/components/Divider';

function ProjectStack({ showTitle, tools, showDivider }) {
  return (
    <>
      {showTitle ? <SectionTitle>Tools and Technologies:</SectionTitle> : null}
      {/* <p>{tools.join(', ')}</p> */}
      <div style={{
        display: 'flex', flexFlow: 'row wrap', gap: 10,
      }}
      >{tools.map((tool) => (
        <Chip key={tool}>
          <span>{tool}</span>
        </Chip>
      ))}
      </div>

      {showDivider ? <Divider /> : null}
    </>
  );
}

ProjectStack.propTypes = {
  showTitle: PropTypes.bool,
  showDivider: PropTypes.bool,
  tools: PropTypes.arrayOf(PropTypes.string),
};

ProjectStack.defaultProps = {
  showTitle: true,
  showDivider: true,
  tools: [],
};

export default ProjectStack;
