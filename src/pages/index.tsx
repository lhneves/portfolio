import HeroSection from '@/resources/Sections/HeroSection';
import Skills from '@/resources/Sections/Skills';
import { Container } from '@/styles/pages/index.styled';

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <Skills />
    </Container>
  );
}
