import Hero from '@/resources/Sections/HeroSection';
import AboutMe from '@/resources/Sections/AboutMe';
import { Container } from '@/styles/pages/index.styled';

export default function Home() {
  return (
    <Container>
      <Hero />
      <AboutMe />
    </Container>
  );
}
