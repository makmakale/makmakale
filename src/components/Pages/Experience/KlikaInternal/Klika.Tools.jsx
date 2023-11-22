import { techs } from '@/common/constants/techs';
import ProjectStack from '@/common/components/ProjectStack';

const tools = [
  techs.react,
  techs.redux,
  techs.mobx,
  techs.node,
  techs.postgre,
  techs.aws,
  techs.handlebars,
  techs.php,
];

function KlikaTools() {
  return (
    <ProjectStack tools={tools} />
  );
}

export default KlikaTools;
