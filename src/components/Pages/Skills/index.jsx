import PropTypes from 'prop-types';
import PageContent from '@/common/components/PageContent';
import { SkillsBox, SkillsContent, SkillsSection } from '@/components/Pages/Skills/Skills.styled';
import mobxIcon from '@/assets/images/skills/mobx.svg';
import echartsIcon from '@/assets/images/skills/echarts.png';

function Skills({ title }) {
  return (
    <PageContent title={title}>
      <SkillsSection>
        <h2>Frontend</h2>
        <SkillsContent>
          <SkillsBox><i className="bx bxl-html5" />html</SkillsBox>
          <SkillsBox><i className="bx bxl-css3" />css</SkillsBox>
          <SkillsBox><i className="bx bxl-javascript" />js</SkillsBox>
          <SkillsBox><i className="bx bxl-react" />react</SkillsBox>
          <SkillsBox><i className="bx bxl-redux" />redux</SkillsBox>
          <SkillsBox><img src={echartsIcon} alt="mobx" /> echarts</SkillsBox>
          <SkillsBox><img src={mobxIcon} alt="mobx" /> mobx</SkillsBox>
          <SkillsBox><i className="bx bxl-bootstrap" />bootstrap</SkillsBox>
        </SkillsContent>
      </SkillsSection>

      <SkillsSection>
        <h2>Backend</h2>
        <SkillsContent className="content">
          <SkillsBox><i className="bx bxl-nodejs" />node</SkillsBox>
          <SkillsBox><i className="bx bxl-php" />symfony</SkillsBox>
        </SkillsContent>
      </SkillsSection>

      <SkillsSection>
        <h2>Data</h2>
        <SkillsContent className="content">
          <SkillsBox><i className="bx bxl-postgresql" />postgresql</SkillsBox>
          <SkillsBox><i className="bx bxl-mongodb" />mongodb</SkillsBox>
        </SkillsContent>
      </SkillsSection>
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
