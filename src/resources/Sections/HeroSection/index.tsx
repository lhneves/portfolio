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
import { Image, useTheme } from '@nextui-org/react';
import AnimationLayout from '@/resources/Animations/AnimationLayout';

export default function Hero() {
  const { isDark } = useTheme();

  return (
    <AnimationLayout type="up" id="intro">
      <Container>
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
        <ScrollIndicator href="/#about-me" dark={String(isDark)}>
          <span></span>
        </ScrollIndicator>
      </Container>
    </AnimationLayout>
  );
}
