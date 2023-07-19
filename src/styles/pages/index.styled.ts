import styled from '@emotion/styled';
import { rem } from '../variables';

export const Container = styled.main`
  max-width: 90%;
  margin: 0 auto;
  position: relative;
  padding: ${rem(88)} 0;

  @media (min-width: 600px) {
    max-width: 80%;
  }
`;
