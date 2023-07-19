import React from 'react';

import { Image } from '@nextui-org/react';
import { Container, SlideContainer, Subtitle, Title } from './styled';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function AboutMe() {
  return (
    <Container id="about-me">
      <Title>Who am I?</Title>
      <Subtitle>
        I&apos;m a FrontEnd developer with over 2 and a half years of experience, mostly
        self-taught. I started at a small startup and then moved on to a large Brazilian IT company,
        where I&apos;ve built scalable and modern websites building scalable and modern websites. As
        someone who has always been curious about design, I strive to apply the best UX/UI practices
        with attention to detail, including performance, animation, and responsive design.
      </Subtitle>
      <Title>My Path</Title>
      <div>
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideContainer>
              <Image src="/images/itau.png" />
              <p>
                I have worked with the quantitative team at{' '}
                <b>
                  <i>Itau Asset Managment</i>
                </b>
                , where I developed the front-end and back-end of a data visualization application.
                This application was specifically designed to enhance our backtests and fund
                management processes.
              </p>
            </SlideContainer>
          </SwiperSlide>
          <SwiperSlide>
            <SlideContainer>
              <Image src="/images/ecore.png" />
              <p>
                <b>
                  <i>e-Core</i>
                </b>{' '}
                is one of the largest medium-sized IT companies in Brazil, developing softwares and
                serving clients from around the world. During my time here, I played a key role in
                developing the front-end of an application designed for code challenge reviews,
                significantly accelerating the job opening phase.
              </p>
            </SlideContainer>
          </SwiperSlide>
        </Swiper>
      </div>
    </Container>
  );
}
