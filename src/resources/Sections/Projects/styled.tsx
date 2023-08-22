import styled from '@emotion/styled';

export const Container = styled.section`
  height: auto;

  padding-top: 5vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 600px) {
    gap: 60px;
    height: 90vh;
    padding-top: 6rem;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 90%;
  }
`;
