import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: 3rem;
  min-height: 80vh;

  @media (min-width: 600px) {
    padding-top: 3rem;
    align-items: center;
  }

  @media (min-width: 1300px) {
    min-height: 90vh;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 1200px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillDescription = styled.p`
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const SkillsContainer = styled.div`
  @media (min-width: 600px) {
    gap: 20px;
  }

  display: flex;
  justify-content: space-around;
  height: flex-start;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: 10px;
`;
