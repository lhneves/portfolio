import React from 'react';
import { CardStyled } from './styled';
import { Card, Image } from '@nextui-org/react';

interface SkillCard {
  imageURL: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function SkillCard({ imageURL, onMouseEnter, onMouseLeave, onClick }: SkillCard) {
  return (
    <CardStyled
      variant="bordered"
      isPressable
      isHoverable
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <Card.Body>
        <Image src={imageURL} />
      </Card.Body>
    </CardStyled>
  );
}
