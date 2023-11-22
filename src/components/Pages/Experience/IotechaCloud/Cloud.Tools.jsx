import { techs } from '@/common/constants/techs';
import ProjectStack from '@/common/components/ProjectStack';

const tools = [
  techs.react,
  techs.redux,
  techs.reduxForm,
  techs.echarts,
  techs.node,
  techs.mui,
  techs.sc,
];

function CloudTools() {
  return (
    <ProjectStack tools={tools} />
  );
}

export default CloudTools;
