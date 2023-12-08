import itechartLogo from '@/assets/images/companies/itechart.png';
import { CompanyHeader, CompanyLogo } from '@/common/components/Experience';
import Period from '@/common/components/Period';
import FoxhuntHeader from '@/components/Pages/Experience/iTechArt/Foxhunt.Header';
import FoxhuntResponsibilities from '@/components/Pages/Experience/iTechArt/Foxhunt.Responsibilities';
import KlikaResponsibilities from '@/components/Pages/Experience/KlikaInternal/Klika.Responsibilities';
import KlikaTools from '@/components/Pages/Experience/KlikaInternal/Klika.Tools';

function Part4() {
  return (
    <>
      <KlikaResponsibilities />
      <KlikaTools />

      <CompanyHeader>
        <CompanyLogo src={itechartLogo} alt="iTechArt Group Logo" height={40} />
        <Period>Dec 2020 - Jun 2021</Period>
      </CompanyHeader>

      <FoxhuntHeader />
      <FoxhuntResponsibilities />
    </>
  );
}

export default Part4;
