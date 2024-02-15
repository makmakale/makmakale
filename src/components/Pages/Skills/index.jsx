import echartsIcon from '@/assets/images/skills/echarts.png';
import i18nextIcon from '@/assets/images/skills/i18next.png';
import muiIcon from '@/assets/images/skills/material-ui.png';
import mobxIcon from '@/assets/images/skills/mobx.svg';
import PageContent from '@/common/components/PageContent';
import {
  SkillsBackEndSection, SkillsBox, SkillsContent, SkillsSection,
} from '@/components/Pages/Skills/Skills.styled';
import PropTypes from 'prop-types';

function Skills({ title }) {
  return (
    <PageContent title={title}>
      <SkillsSection>
        <h2>Frontend</h2>
        <SkillsContent>
          <SkillsBox><i className="bx bxl-html5" />html</SkillsBox>
          <SkillsBox><i className="bx bxl-css3" />css</SkillsBox>
          <SkillsBox><i className="bx bxl-javascript" />js</SkillsBox>
          <SkillsBox><i className="bx bxl-sass" /> scss</SkillsBox>
          <SkillsBox><i className="bx bxl-react" />react</SkillsBox>
          <SkillsBox><i className="bx bxl-redux" />redux</SkillsBox>
          <SkillsBox><i className="bx bxl-redux" />redux form</SkillsBox>
          <SkillsBox><i className="bx bxl-redux" />redux toolkit</SkillsBox>
          <SkillsBox><img src={muiIcon} alt="material-ui" />material-ui</SkillsBox>
          <SkillsBox><img src={echartsIcon} alt="mobx" />echarts</SkillsBox>
          <SkillsBox><img src={i18nextIcon} alt="i18nextIcon" />i18next</SkillsBox>
          <SkillsBox><img src={mobxIcon} alt="mobx" />mobx</SkillsBox>
          <SkillsBox><i className="bx bxl-bootstrap" />bootstrap</SkillsBox>
        </SkillsContent>
      </SkillsSection>

      <SkillsBackEndSection>
        <SkillsSection>
          <h2>Backend</h2>
          <SkillsContent className="content">
            <SkillsBox><i className="bx bxl-nodejs" />node /<br /> express</SkillsBox>
          </SkillsContent>
        </SkillsSection>

        <SkillsSection>
          <h2>Data</h2>
          <SkillsContent className="content">
            <SkillsBox><i className="bx bxl-postgresql" />mysql / postgresql</SkillsBox>
            <SkillsBox><i className="bx bxl-mongodb" />mongodb</SkillsBox>
          </SkillsContent>
        </SkillsSection>
      </SkillsBackEndSection>
    </PageContent>
  );
}

Skills.propTypes = {
  title: PropTypes.string,
};

Skills.defaultProps = {
  title: null,
};

export default Skills;
