import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  padding: 100px 0;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;

  @media (min-width: 1200px) {
    font-size: 48px;
  }
`;

export const RightSideContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1200px) {
    gap: 8rem;
  }
`;
