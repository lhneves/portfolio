import React from 'react';
import { CardStyled } from './styled';
import { Card, Image } from '@nextui-org/react';

interface SkillCard<T> {
  imageURL: string;
  skillName: T;
  setSkillSelected: React.Dispatch<React.SetStateAction<T | undefined>>;
}

export default function SkillCard<T>({ imageURL, skillName, setSkillSelected }: SkillCard<T>) {
  return (
    <CardStyled
      variant="bordered"
      isPressable
      isHoverable
      onMouseEnter={() => setSkillSelected(skillName)}
      onMouseLeave={() => setSkillSelected(undefined)}
    >
      <Card.Body>
        <Image src={imageURL} />
      </Card.Body>
    </CardStyled>
  );
}
