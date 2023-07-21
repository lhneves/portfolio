import React from 'react';
import { Image } from '@nextui-org/react';
import { BodyStyled, CardStyled, FooterStyled, Title } from './styled';

interface ProjectCardProps {
  imageURL: string;
  title?: string;
  footerTitle: string;
  href?: string;
}

export default function ProjectCard({ imageURL, title, footerTitle, href }: ProjectCardProps) {
  return (
    <CardStyled isPressable isHoverable onClick={() => href && window.open(href)}>
      <BodyStyled>
        <Image src={imageURL} />
        {title ? <Title>{title}</Title> : null}
      </BodyStyled>
      <FooterStyled>
        <Title>{footerTitle}</Title>
      </FooterStyled>
    </CardStyled>
  );
}
