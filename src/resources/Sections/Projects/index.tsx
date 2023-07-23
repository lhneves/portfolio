import React from 'react';
import { Container, ProjectsContainer } from './styled';
import ProjectCard from '@/resources/Cards/ProjectCard';
import { Link } from '@nextui-org/react';
import AnimationLayout from '@/resources/Animations/AnimationLayout';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { MdOutlineSettings } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';

export default function Projects() {
  return (
    <AnimationLayout type="inView" id="projects">
      <Container>
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
            icon={<AiOutlineClockCircle />}
            title="COUNTDOWN PROJECT"
            footerTitle="COUNTDOWN"
            href="https://countdown-project-seven.vercel.app/"
          />
          <ProjectCard icon={<MdOutlineSettings />} footerTitle="AVAILABLE SOON" />
          <ProjectCard icon={<BiCodeBlock />} footerTitle="YOUR DREAM PROJECT" />
        </ProjectsContainer>
      </Container>
    </AnimationLayout>
  );
}
