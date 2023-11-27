import PageContent from '@/common/components/PageContent';
import { projects } from '@/components/Pages/Projects/Projects.constants';
import {
  ProjectCard,
  ProjectCardButtonsGroup,
  ProjectCardContent,
  ProjectCardImage,
  ProjectCardText,
  ProjectsContainer,
} from '@/components/Pages/Projects/Projects.styled';
import PropTypes from 'prop-types';

function Projects({ title }) {
  return (
    <PageContent title={title}>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectCardContent>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ProjectCardButtonsGroup>
                {project.viewLink
                  ? <a href={project.viewLink} target="_blank" rel="noreferrer">View</a> : null}
                <a href={project.sourceLink} target="_blank" rel="noreferrer">Source</a>
              </ProjectCardButtonsGroup>
            </ProjectCardContent>
            <ProjectCardImage style={{ backgroundImage: `url(${project.img})` }} />
            <ProjectCardText><h2>Hover Me</h2></ProjectCardText>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </PageContent>
  );
}

Projects.propTypes = {
  title: PropTypes.string,
};

Projects.defaultProps = {
  title: null,
};

export default Projects;
