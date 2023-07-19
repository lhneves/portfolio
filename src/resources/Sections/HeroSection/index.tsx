import React from 'react';

import {
  Container,
  HighlightSubTitle,
  LeftContainer,
  SubTitle,
  Title,
  TitleHighlight,
  UpTitle,
  ScrollIndicator,
  ImageContainer,
} from './styled';
import { Image } from '@nextui-org/react';

export default function Hero() {
  return (
    <Container id="intro">
      <LeftContainer>
        <UpTitle>Hi, there!</UpTitle>
        <Title>
          I&apos;m <TitleHighlight>Luiz Doretto</TitleHighlight>
        </Title>
        <SubTitle>
          And I will help you create <HighlightSubTitle>beautiful</HighlightSubTitle> and
          <span> faster </span> interfaces that leads to the application success.
        </SubTitle>
      </LeftContainer>
      <ImageContainer>
        <Image
          showSkeleton
          src="/images/hello.png"
          width={400}
          height={500}
          alt="Emoji Saying Hi!"
        />
      </ImageContainer>
      <ScrollIndicator href="/#about-me">
        <span></span>
      </ScrollIndicator>
    </Container>
  );
}
