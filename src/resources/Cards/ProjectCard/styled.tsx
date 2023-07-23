import styled from '@emotion/styled';
import { Card } from '@nextui-org/react';

export const CardStyled = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #191919;
  border: 2px solid #4277ff;
  width: 100%;
`;

export const BodyStyled = styled(Card.Body)`
  gap: 30px;
  min-height: 220px;

  & > svg {
    width: 61px;
    height: 61px;
    fill: #fff;
  }
`;

export const Title = styled.h4`
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.03rem;
  margin: 0;
  text-align: center;
`;

export const FooterStyled = styled(Card.Footer)`
  padding: 1.2rem 0;
  color: white;
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    1195.28% 141.42% at 0.18% 100.61%,
    rgba(66, 119, 255, 0.9) 0%,
    rgba(196, 183, 255, 0.9) 100%
  );
`;
