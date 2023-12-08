import ProjectDescription from '@/common/components/ProjectDescription';
import CargoHeader from '@/components/Pages/Experience/iTechArt/Cargo.Header';
import CargoResponsibilities from '@/components/Pages/Experience/iTechArt/Cargo.Responsibilities';
import ItechartTools from '@/components/Pages/Experience/iTechArt/Itechart.Tools';
import MoomlaHeader from '@/components/Pages/Experience/Moomla/Moomla.Header';

function Part5() {
  return (
    <>
      <CargoHeader />

      <ProjectDescription>
        <p>
          Desktop & Mobile app for company drivers. Shows the formed waybills,
          create routes on the map and control points for active waybill. Allow to make reports of stolen/damaged
          goods.
        </p>
      </ProjectDescription>
      <CargoResponsibilities />
      <ItechartTools />

      <MoomlaHeader />
    </>
  );
}

export default Part5;
