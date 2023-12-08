import zavodLogo from '@/assets/images/companies/zavod.png';
import pumps from '@/assets/images/projects/nasosy.webp';
import {
  CompanyHeader, CompanyLogo, ProjectImage, ProjectInfo, SectionTitle,
} from '@/common/components/Experience';
import Period from '@/common/components/Period';
import MoomlaDescription from '@/components/Pages/Experience/Moomla/Moomla.Description';
import MoomlaTools from '@/components/Pages/Experience/Moomla/Moomla.Tools';
import MarketerResponsibilities from '@/components/Pages/Experience/Zavod/Marketer.Responsibilities';

function Part6() {
  return (
    <>
      <MoomlaDescription />
      <MoomlaTools />

      <CompanyHeader>
        <CompanyLogo src={zavodLogo} alt="Zavod Promburvod Logo" height={40} />
        <Period>Apr 2010 - May 2020</Period>
      </CompanyHeader>

      <ProjectInfo>
        <ProjectImage src={pumps} alt="PLant Production" />

        <div>
          Plant for the production of pumps and pumping equipment, supply of imported pumps.
        </div>
      </ProjectInfo>

      <SectionTitle>Marketer</SectionTitle>
      <MarketerResponsibilities />
    </>
  );
}

export default Part6;
