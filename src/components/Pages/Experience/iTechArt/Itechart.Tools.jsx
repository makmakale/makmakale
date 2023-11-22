import { techs } from '@/common/constants/techs';
import ProjectStack from '@/common/components/ProjectStack';

const tools = [
  techs.react,
  techs.rn,
  techs.redux,
  techs.rtk,
  techs.node,
  techs.postgre,
  techs.gMap,
  techs.sc,
];

function ItechartTools() {
  return (
    <ProjectStack tools={tools} />
  );
}

export default ItechartTools;
