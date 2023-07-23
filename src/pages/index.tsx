import Contact from '@/resources/Sections/Contact';
import HeroSection from '@/resources/Sections/HeroSection';
import Projects from '@/resources/Sections/Projects';
// import Skills from '@/resources/Sections/Skills';
import { Container } from '@/styles/pages/index.styled';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <Container>
      <HeroSection />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <ToastContainer />
    </Container>
  );
}
