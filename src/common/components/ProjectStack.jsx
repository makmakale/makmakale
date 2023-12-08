import { Chip } from '@/common/components/Chip';
import Divider from '@/common/components/Divider';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ToolsWrapper = styled.div`
  border: 1px solid #ccc;
  position: relative;
  margin-top: 1rem;
  padding: 1rem;
  padding-top: 0;
  
  .title{
    position: absolute;
    left: 50%;
    height: 30px;
    transform: translate(-50%, -15px);
    background: ${({ theme }) => theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.whiteColor};
    padding: 0 1.5rem;
    
    &::before{
      position: absolute;
      content: '';
      left: -2px;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-left: 15px solid ${({ theme }) => theme.whiteColor};
    }

    &::after{
      position: absolute;
      content: '';
      left: calc(100% - 13px);
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      border-right: 15px solid ${({ theme }) => theme.whiteColor};
    }
  }
`;

function ProjectStack({ showTitle, tools, showDivider }) {
  return (
    <>
      <ToolsWrapper>
        {showTitle ? <div className="title">Tools and Technologies</div> : null}

        <div style={{
          display: 'flex', flexFlow: 'row wrap', gap: 8, marginTop: '2rem', justifyContent: 'center',
        }}
        >
          {tools.map((tool) => (
            <Chip key={tool}>
              <span>{tool}</span>
            </Chip>
          ))}
        </div>
      </ToolsWrapper>
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
