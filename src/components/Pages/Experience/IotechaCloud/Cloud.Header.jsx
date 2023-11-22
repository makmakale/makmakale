import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import cloud from '@/assets/images/projects/IoT.ON.jpg';
import ProjectTable from '@/common/components/ProjectTable';

function CloudHeader() {
  return (
    <>
      <SectionTitle>Project Info:</SectionTitle>

      <ProjectInfo>
        <ProjectImage src={cloud} alt="IoT.ON™ Cloud Platform" />

        <ProjectTable
          project="IoT.ON™ Cloud Platform"
          title="Frontend Developer"
          team="PM, BA, 2 - FE, 4 - BE, 2 - QA"
          stack="Frontend - React, backend - Java"
        />
      </ProjectInfo>
    </>
  );
}

export default CloudHeader;
