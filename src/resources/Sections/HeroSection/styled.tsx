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
  padding-top: ${rem(24)};

  @media (min-width: 600px) {
    height: 90vh;
  }

  @media (min-width: 1200px) {
    height: 85vh;
    display: grid;
    grid-template-columns: 0.8fr 0.6fr;
    align-items: center;
    justify-content: center;
    gap: 50px;
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
  font-size: 24px;
  font-weight: 500;

  @media (min-width: 600px) {
    font-size: 35px;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;

  @media (min-width: 600px) {
    font-size: 90px;
  }
`;

export const TitleHighlight = styled.span`
  color: #0072f5;
`;

export const SubTitle = styled.p`
  font-size: 24px;
  text-align: start;
  font-weight: 400;

  @media (min-width: 600px) {
    font-size: 30px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const HighlightSubTitle = styled.span`
  background: linear-gradient(180deg, #0072f5 70%, #4617ff 20%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
    width: 300px;
    height: auto;
    margin: 0 auto;
    @media (min-width: 600px) {
      width: 400px;
    }
  }
`;

export const ScrollIndicator = styled.a<{ dark?: boolean }>`
  @media (min-width: 600px) {
    display: inline-block;
  }
  display: none;
  position: absolute;
  bottom: 100px;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
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
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border: 2px solid ${({ dark }) => (dark ? '#fff' : '#000')};
    border-radius: 50px;
    box-sizing: border-box;

    &::before {
      position: absolute;
      top: 10px;
      left: 50%;
      content: '';
      width: 6px;
      height: 6px;
      margin-left: -3px;
      background-color: ${({ dark }) => (dark ? '#fff' : '#000')};
      border-radius: 100%;
      -webkit-animation: ${sdb10} 2s infinite;
      animation: ${sdb10} 2s infinite;
      box-sizing: border-box;
    }
  }
`;
