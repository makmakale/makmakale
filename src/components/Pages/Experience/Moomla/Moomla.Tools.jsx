import ProjectStack from '@/common/components/ProjectStack';
import { techs } from '@/common/constants/techs';

const tools = [
  techs.react,
  techs.bootstrap,
  techs.node,
  techs.express,
  techs.handlebars,
  techs.mongo,
  techs.expressSession,
];

function MoomlaTools() {
  return (
    <ProjectStack tools={tools} showDivider={false} />
  );
}

export default MoomlaTools;
