import React, { useState } from 'react';
import {
  Container,
  DescriptionContainer,
  SkillDescription,
  SkillsContainer,
  SubContainer,
} from './styled';
import SkillCard from '../../Cards/SkillCard';
import { SkillsType } from '@/models/skills.interface';

export default function Skills() {
  const skills = {
    html: 'HTML is the standard markup language for creating web pages and applications.',
    css: 'CSS is the language used for styling the appearance of web pages.',
    react: 'React is a powerful JavaScript library for building interactive user interfaces.',
    next: 'NextJS is a framework that extends React for creating server-rendered applications.',
    typescript:
      'TypeScript is a statically-typed superset of JavaScript that enhances code quality and maintainability.',
    javascript:
      'JavaScript is a versatile programming language used for both front-end and back-end web development.',
    storybook:
      'Storybook is a development environment for designing, building, and testing UI components in isolation.',
    styledComponents:
      'Styled-Components is a CSS-in-JS library that allows you to write CSS styles directly in your JavaScript code.',
    devSkills:
      'This card is to refer to development skills such as clean code, design patterns, and maintainable code.',
    threejs: 'ThreeJS is a library for creating 3D graphics and animations on the web.',
    jest: 'Jest is a testing framework that provides a simple and efficient way to test code.',
    materialUI:
      'Material UI is a popular React component library that implements Material Design principles for building visually appealing and responsive user interfaces.',
  };
  const [skillSelected, setSkillSelected] = useState<SkillsType>();

  return (
    <Container id="skills">
      <SubContainer>
        <DescriptionContainer>
          <h1>My Skills</h1>
          <SkillDescription>
            {skillSelected ? skills[skillSelected] : 'Click on any skill to see a description.'}
          </SkillDescription>
        </DescriptionContainer>
        <SkillsContainer>
          {Object.keys(skills).map((skill) => {
            const typedSkill = skill as SkillsType;
            return (
              <SkillCard
                key={skill}
                skill={typedSkill}
                onClick={() => setSkillSelected(typedSkill)}
                onMouseEnter={() => setSkillSelected(typedSkill)}
                onMouseLeave={() => setSkillSelected(undefined)}
                isSkillSelected={skillSelected === skill}
              />
            );
          })}
        </SkillsContainer>
      </SubContainer>
    </Container>
  );
}
