import { CompanyHeader, CompanyLogo, WorkPeriod } from '@/common/components/Experience';
import klikaLogo from '@/assets/images/companies/klika.svg';
import CloudHeader from '@/components/Pages/Experience/IotechaCloud/Cloud.Header';
import CloudDescription from '@/components/Pages/Experience/IotechaCloud/Cloud.Description';
import CloudResponsibilities from '@/components/Pages/Experience/IotechaCloud/Cloud.Responsibilities';

function Part1() {
  return (
    <>
      <CompanyHeader>
        <CompanyLogo src={klikaLogo} alt="Klika-Tech, Inc Logo" height={40} />
        <WorkPeriod>Jul 2021 - Nov 2023</WorkPeriod>
      </CompanyHeader>

      <CloudHeader />
      <CloudDescription />
      <CloudResponsibilities />
    </>
  );
}

export default Part1;
