import React from 'react';
import { Container, ProjectsContainer } from './styled';
import ProjectCard from '@/resources/Cards/ProjectCard';
import { Link } from '@nextui-org/react';

export default function Projects() {
  return (
    <Container id="projects">
      <h1 style={{ margin: 0 }}>Projects</h1>

      <Link
        href="https://github.com/lhneves"
        target="blank"
        rel="noreferrer"
        isExternal
        color="text"
        style={{ fontSize: '22px' }}
      >
        View source code on GitHub.
      </Link>

      <ProjectsContainer>
        <ProjectCard
          imageURL="/devicons/countdown.svg"
          title="COUNTDOWN PROJECT"
          footerTitle="COUNTDOWN"
          href="https://countdown-project-seven.vercel.app/"
        />
        <ProjectCard imageURL="/devicons/config.svg" footerTitle="AVAILABLE SOON" />
        <ProjectCard imageURL="/devicons/code.svg" footerTitle="YOUR DREAM PROJECT" />
      </ProjectsContainer>
    </Container>
  );
}
