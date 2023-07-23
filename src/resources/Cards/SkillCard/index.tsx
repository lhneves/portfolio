import React from 'react';
import { CardBodyStyled, CardStyled } from './styled';
import { useTheme } from '@nextui-org/react';
import { SkillsType } from '@/models/skills.interface';
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiStorybook,
  SiStyledcomponents,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si';
import { BsCodeSlash } from 'react-icons/bs';

interface SkillCard {
  skill: SkillsType;
  isSkillSelected?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function SkillCard({
  skill,
  isSkillSelected,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: SkillCard) {
  const { isDark } = useTheme();

  const skills = {
    html: <SiHtml5 />,
    css: <SiCss3 />,
    react: <SiReact />,
    next: <SiNextdotjs />,
    typescript: <SiTypescript />,
    javascript: <SiJavascript />,
    storybook: <SiStorybook />,
    styledComponents: <SiStyledcomponents />,
    devSkills: <BsCodeSlash />,
    threejs: <SiThreedotjs />,
    jest: <SiJest />,
    materialUI: <SiMui />,
  };

  return (
    <CardStyled
      variant="bordered"
      selected={isSkillSelected}
      isPressable
      isHoverable
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      dark={String(isDark)}
    >
      <CardBodyStyled>{skills[skill]}</CardBodyStyled>
    </CardStyled>
  );
}
