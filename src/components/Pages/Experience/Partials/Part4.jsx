import {
  CompanyHeader, CompanyLogo, ProjectResponsibilities, WorkPeriod,
} from '@/common/components/Experience';
import itechartLogo from '@/assets/images/companies/itechart.png';
import FoxhuntHeader from '@/components/Pages/Experience/iTechArt/Foxhunt.Header';
import FoxhuntResponsibilities from '@/components/Pages/Experience/iTechArt/Foxhunt.Responsibilities';
import KlikaTools from '@/components/Pages/Experience/KlikaInternal/Klika.Tools';
import Divider from '@/common/components/Divider';
import CargoHeader from '@/components/Pages/Experience/iTechArt/Cargo.Header';

function Part4() {
  return (
    <>
      <ProjectResponsibilities>
        <li>support/adding adaptability;</li>
        <li>content manager.</li>
      </ProjectResponsibilities>
      <KlikaTools />

      <CompanyHeader>
        <CompanyLogo src={itechartLogo} alt="iTechArt Group Logo" height={40} />
        <WorkPeriod>Dec 2020 - Jun 2021</WorkPeriod>
      </CompanyHeader>

      <FoxhuntHeader />
      <FoxhuntResponsibilities />

      <Divider />

      <CargoHeader />
    </>
  );
}

export default Part4;
