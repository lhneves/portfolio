import styled from '@emotion/styled';
import { Card } from '@nextui-org/react';

export const CardStyled = styled(Card)`
  max-width: 90px;
  padding: 0.8rem;
  border: 2px solid #4277ff;
  box-sizing: border-box;

  @media (min-width: 600px) {
    max-width: 130px;
    padding: 2rem;
  }

  @media (min-width: 1300px) {
    max-width: 170px;
    padding: 3rem;
  }
`;
