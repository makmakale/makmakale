import { techs } from '@/common/constants/techs';
import ProjectStack from '@/common/components/ProjectStack';

const tools = [
  techs.react,
  techs.redux,
  techs.formik,
  techs.mui,
  techs.sc,
  techs.lang,
];

function EmbTools() {
  return (
    <ProjectStack tools={tools} />
  );
}

export default EmbTools;
