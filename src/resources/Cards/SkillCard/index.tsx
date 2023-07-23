import React from 'react';
import { CardStyled } from './styled';
import { Card, Image, useTheme } from '@nextui-org/react';

interface SkillCard {
  imageURL: string;
  isSkillSelected?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

export default function SkillCard({
  imageURL,
  isSkillSelected,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: SkillCard) {
  const { isDark } = useTheme();

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
      <Card.Body>
        <Image src={imageURL} />
      </Card.Body>
    </CardStyled>
  );
}
