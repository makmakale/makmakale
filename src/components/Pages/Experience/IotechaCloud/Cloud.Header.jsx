import { ProjectInfo } from '@/common/components/Experience';
import ProjectTable from '@/common/components/ProjectTable';

function CloudHeader() {
  return (
    <>
      <h2 align="center">IoT.ON™ Cloud Platform</h2>

      <ProjectInfo>
        <ProjectTable
          title="Frontend Developer"
          team={(
            <div>
              <div>Project Manager, Business Analyst</div>
              <div>2 - Front-end developers</div>
              <div>4 - Back-end developers</div>
              <div>2 - QA Engineer</div>
            </div>
          )}
          stack={(
            <div>
              <div>Front-end - React, Redux</div>
              <div>Back-end - Java/AWS</div>
            </div>
          )}
        />
      </ProjectInfo>
    </>
  );
}

export default CloudHeader;
