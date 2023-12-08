import cargoTrans from '@/assets/images/projects/cargo-trans.png';
import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import ProjectTable from '@/common/components/ProjectTable';

function CargoHeader() {
  return (
    <>
      <SectionTitle>Project Info:</SectionTitle>

      <ProjectInfo>
        <ProjectImage src={cargoTrans} alt="CargoTrans" width={150} />

        <div className="content">
          <ProjectTable
            project="CargoTrans"
            title="Fullstack Developer"
            stack="Frontend - React, React Native, backend - Nodejs."
          />
        </div>
      </ProjectInfo>
    </>
  );
}

export default CargoHeader;
