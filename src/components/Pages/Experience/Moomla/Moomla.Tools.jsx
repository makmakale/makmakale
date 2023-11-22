import { techs } from '@/common/constants/techs';
import ProjectStack from '@/common/components/ProjectStack';

const tools = [
  techs.react,
  techs.bootstrap,
  techs.node,
  techs.express,
  techs.handlebars,
  techs.mongo,
];

function MoomlaTools() {
  return (
    <ProjectStack tools={tools} showDivider={false} />
  );
}

export default MoomlaTools;
