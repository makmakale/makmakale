import {
  CompanyHeader,
  CompanyLogo,
  ProjectImage,
  ProjectInfo,
  SectionTitle,
  WorkPeriod,
} from '@/common/components/Experience';
import zavodLogo from '@/assets/images/companies/zavod.png';
import MarketerResponsibilities from '@/components/Pages/Experience/Zavod/Marketer.Responsibilities';
import ManagerResponsibilities from '@/components/Pages/Experience/Zavod/Manager.Responsibilities';
import pumps from '@/assets/images/projects/nasosy.webp';

function Part5() {
  return (
    <>
      <CompanyHeader>
        <CompanyLogo src={zavodLogo} alt="Zavod Promburvod Logo" height={40} />
        <WorkPeriod>Apr 2010 - May 2020</WorkPeriod>
      </CompanyHeader>

      <ProjectInfo>
        <ProjectImage src={pumps} alt="PLant Production" />

        <div>
          Plant for the production of pumps and pumping equipment, supply of imported pumps.
        </div>
      </ProjectInfo>

      <SectionTitle>Marketer</SectionTitle>
      <MarketerResponsibilities />

      <SectionTitle>Manager</SectionTitle>
      <ManagerResponsibilities />
    </>
  );
}

export default Part5;
