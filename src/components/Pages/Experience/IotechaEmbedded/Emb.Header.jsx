import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import embedded from '@/assets/images/projects/Embedded-Software.jpg';
import ProjectTable from '@/common/components/ProjectTable';

function EmbHeader() {
  return (
    <>
      <SectionTitle>Project Info:</SectionTitle>

      <ProjectInfo>
        <ProjectImage src={embedded} alt="IoT.ON™ Embedded Software" />

        <ProjectTable
          project="IoT.ON™ Embedded Software"
          title="Frontend Developer"
          team="At least two teams"
          stack="Frontend - React, backend - C++"
        />
      </ProjectInfo>
    </>
  );
}

export default EmbHeader;
