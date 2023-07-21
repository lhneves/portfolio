import React from 'react';
import { CardStyled, GradientDiv } from './styled';
import { Card, Image } from '@nextui-org/react';

export default function SocialCard() {
  return (
    <GradientDiv>
      <CardStyled>
        <Card.Body
          style={{
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '1rem',
          }}
        >
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/luiz-doretto/">
            <Image src="/images/linkedin.png" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/lhneves">
            <Image src="/images/github.png" />
          </a>
          <a target="_blank" rel="noreferrer" href="mailto:luiz.n.doretto@gmail.com">
            <Image src="/images/gmail.png" />
          </a>
        </Card.Body>
      </CardStyled>
    </GradientDiv>
  );
}
