import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import cargoTrans from '@/assets/images/projects/cargo-trans.png';
import ProjectTable from '@/common/components/ProjectTable';
import ProjectDescription from '@/common/components/ProjectDescription';

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

          <ProjectDescription showTitle={false}>
            <p>
              Desktop & Mobile app for company drivers. Shows the formed waybills,
              create routes on the map and control points for active waybill. Allow to make reports of stolen/damaged
              goods.
            </p>
          </ProjectDescription>
        </div>
      </ProjectInfo>
    </>
  );
}

export default CargoHeader;
