import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Card } from '@nextui-org/react';

export const CardStyled = styled(Card)<{ selected?: boolean; dark?: string }>`
  display: flex;
  align-items: center;
  max-width: 90px;
  padding: 0.8rem;
  border: 2px solid #4277ff;
  box-sizing: border-box;

  ${({ selected, dark }) =>
    selected &&
    css`
      &::before {
        content: '';
        position: absolute;
        height: 10px;
        width: 10px;
        background-color: #4277ff;
        top: 6px;
        right: 6px;
        border-radius: 50%;
      }
      box-shadow: ${dark === 'true'
        ? 'rgba(255, 255, 255, 0.43) 0px 2px 8px'
        : 'rgba(0, 0, 0, 0.24) 0px 3px 8px'};
    `}

  @media (min-width: 600px) {
    max-width: 130px;
    padding: 2rem;
  }

  @media (min-width: 1300px) {
    max-width: 170px;
    padding: 3rem;
  }
`;

export const CardBodyStyled = styled(Card.Body)`
  display: flex;
  align-items: center;
  width: fit-content;

  & > svg {
    width: 32px;
    height: 32px;
    fill: #4277ff;

    @media (min-width: 600px) {
      width: 48px;
      height: 48px;
    }
  }
`;
