import klikaLogo from '@/assets/images/companies/klika.svg';
import { CompanyHeader, CompanyLogo, WorkPeriod } from '@/common/components/Experience';
import CloudDescription from '@/components/Pages/Experience/IotechaCloud/Cloud.Description';
import CloudHeader from '@/components/Pages/Experience/IotechaCloud/Cloud.Header';
import CloudResponsibilities from '@/components/Pages/Experience/IotechaCloud/Cloud.Responsibilities';

function Part1() {
  return (
    <>
      <CompanyHeader>
        <CompanyLogo src={klikaLogo} alt="Klika-Tech, Inc Logo" />
        <WorkPeriod>Jul 2021 - Nov 2023</WorkPeriod>
      </CompanyHeader>

      <CloudHeader />
      <CloudDescription />
      <CloudResponsibilities />
    </>
  );
}

export default Part1;
