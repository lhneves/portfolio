import React from 'react';
import { BodyStyled, CardStyled, FooterStyled, Title } from './styled';

interface ProjectCardProps {
  icon: React.ReactNode;
  title?: string;
  footerTitle: string;
  href?: string;
}

export default function ProjectCard({ icon, title, footerTitle, href }: ProjectCardProps) {
  return (
    <CardStyled isPressable isHoverable onClick={() => href && window.open(href)}>
      <BodyStyled>
        {icon}
        {title ? <Title>{title}</Title> : null}
      </BodyStyled>
      <FooterStyled>
        <Title>{footerTitle}</Title>
      </FooterStyled>
    </CardStyled>
  );
}
