import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { rem } from '@/styles/variables';

export const Container = styled.section`
  position: relative;
  margin: 0 auto;
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${rem(24)} 0;

  @media (min-width: 600px) {
    height: 90vh;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 0.8fr 0.6fr;
    align-items: center;
    justify-content: center;
    gap: ${rem(50)};
    padding-top: 0;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  gap: 0.5rem;
`;

export const UpTitle = styled.span`
  font-size: ${rem(24)};
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: ${rem(35)};
  }
`;

export const Title = styled.h1`
  font-size: ${rem(48)};
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: ${rem(90)};
  }
`;

export const TitleHighlight = styled.span`
  color: #0072f5;
`;

export const SubTitle = styled.p`
  font-size: ${rem(24)};
  text-align: start;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: ${rem(30)};
  }

  @media (min-width: 1200px) {
    font-size: ${rem(32)};
  }

  & > i {
    font-weight: 300;
  }
`;

export const HighlightSubTitle = styled.span`
  background-image: linear-gradient(180deg, #0b50ff 11.2%, #672bff 92.5%);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  filter: brightness(1.85);
`;

const sdb10 = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  & img {
    width: ${rem(300)};
    height: auto;
    margin: 0 auto;
    @media (min-width: 600px) {
      width: ${rem(400)};
    }
  }
`;

export const ScrollIndicator = styled.a<{ dark?: string }>`
  @media (min-width: 600px) {
    display: inline-block;
  }
  display: none;
  position: absolute;
  bottom: ${rem(100)};
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: ${({ dark }) => (dark === 'true' ? '#fff' : '#000')};
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }

  & span {
    position: absolute;
    top: 0;
    left: 50%;
    width: ${rem(30)};
    height: ${rem(50)};
    margin-left: ${rem(-15)};
    border: ${rem(2)} solid ${({ dark }) => (dark === 'true' ? '#fff' : '#000')};
    border-radius: ${rem(50)};
    box-sizing: border-box;

    &::before {
      position: absolute;
      top: ${rem(10)};
      left: 50%;
      content: '';
      width: ${rem(6)};
      height: ${rem(6)};
      margin-left: ${rem(-3)};
      background-color: ${({ dark }) => (dark === 'true' ? '#fff' : '#000')};
      border-radius: 100%;
      -webkit-animation: ${sdb10} 2s infinite;
      animation: ${sdb10} 2s infinite;
      box-sizing: border-box;
    }
  }
`;
