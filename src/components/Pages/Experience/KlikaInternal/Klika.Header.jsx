import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import klika from '@/assets/images/projects/klika.png';
import ProjectTable from '@/common/components/ProjectTable';

function KlikaHeader() {
  return (
    <>
      <SectionTitle>Project Info:</SectionTitle>

      <ProjectInfo>
        <ProjectImage src={klika} alt="Klika Internal Projects" />

        <ProjectTable
          project="Internal Projects"
          title="Fullstack Developer"
          team="PM, 2 - Fullstack developer, 1 - QA"
          stack="Frontend - React, backend - Nodejs, Symfony (PHP)."
        />
      </ProjectInfo>
    </>
  );
}

export default KlikaHeader;
