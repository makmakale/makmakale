import moomla from '@/assets/images/projects/moomla.png';
import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import ProjectTable from '@/common/components/ProjectTable';

function MoomlaHeader() {
  return (
    <>
      <SectionTitle>Project Info:</SectionTitle>

      <ProjectInfo>
        <ProjectImage src={moomla} alt="Moomla Logo" width={150} />

        <div>
          <ProjectTable
            project="Moomla"
            title="Fullstack Developer"
            stack="Frontend - React, backend - Nodejs"
          />

          <p><i>Examination project while passing JavaScript course in It-Academy.</i></p>
        </div>
      </ProjectInfo>
    </>
  );
}

export default MoomlaHeader;
