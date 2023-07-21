import React from 'react';

import ContactCard from '@/resources/Cards/ContactCard';

import { Container, RightSideContainer, Title } from './styled';
import SocialCard from '@/resources/Cards/SocialCard';

export default function Contact() {
  return (
    <Container id="contact">
      <ContactCard />
      <RightSideContainer>
        <Title>You came this far, why don&apos;t you reach me?</Title>
        <SocialCard />
      </RightSideContainer>
    </Container>
  );
}
