import PageContent from '@/common/components/PageContent';
import useDeviceType from '@/common/hooks/useDeviceType';
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
import { useEffect, useState } from 'react';

function Projects({ title, part }) {
  const isMobileOrTablet = useDeviceType();
  const [slicedProjects, setSlicedProjects] = useState(projects);

  useEffect(() => {
    const nextPart = part * 4;
    setSlicedProjects(projects.slice(nextPart - 4, nextPart));
  }, [part]);

  return (
    <PageContent title={title}>
      <ProjectsContainer>
        {slicedProjects.map((project) => (
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
            <ProjectCardText><h2>{isMobileOrTablet ? 'Click Me' : 'Hover Me'}</h2></ProjectCardText>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </PageContent>
  );
}

Projects.propTypes = {
  title: PropTypes.string,
  part: PropTypes.number,
};

Projects.defaultProps = {
  title: null,
  part: 1,
};

export default Projects;
