import itechartLogo from '@/assets/images/companies/itechart.png';
import { CompanyHeader, CompanyLogo } from '@/common/components/Experience';
import Period from '@/common/components/Period';
import ProjectDescription from '@/common/components/ProjectDescription';
import CargoHeader from '@/components/Pages/Experience/iTechArt/Cargo.Header';
import CargoResponsibilities from '@/components/Pages/Experience/iTechArt/Cargo.Responsibilities';
import FoxhuntHeader from '@/components/Pages/Experience/iTechArt/Foxhunt.Header';
import FoxhuntResponsibilities from '@/components/Pages/Experience/iTechArt/Foxhunt.Responsibilities';

function Part5() {
  return (
    <>
      <CompanyHeader>
        <CompanyLogo src={itechartLogo} alt="iTechArt Group Logo" height={40} />
        <Period>Dec 2020 - Jun 2021</Period>
      </CompanyHeader>

      <FoxhuntHeader />
      <FoxhuntResponsibilities />
      <CargoHeader />

      <ProjectDescription>
        <p>
          Desktop & Mobile app for company drivers. Shows the formed waybills,
          create routes on the map and control points for active waybill. Allow to make reports of stolen/damaged
          goods.
        </p>
      </ProjectDescription>
      <CargoResponsibilities />
    </>
  );
}

export default Part5;
