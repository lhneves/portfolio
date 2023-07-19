import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 1300px) {
    min-height: 90vh;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  text-align: center;
  font-size: 32px;
  line-height: 50px;

  @media (min-width: 600px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

export const Subtitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: justify;

  margin-top: 12px;
  margin-bottom: 52px;

  @media (min-width: 600px) {
    font-size: 24px;
    line-height: 46px;
  }
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: auto;
  height: 60vh;

  & p {
    width: 75%;
    text-align: justify;
    font-size: 18px;
  }

  & img {
    border-radius: 10px;
    width: 100px;
  }

  @media (min-width: 600px) {
    height: 30vh;
  }

  @media (min-width: 1200px) {
    height: 40vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 80%;
    margin: auto;
    align-items: center;
    justify-content: center;

    & img {
      width: 200px;
    }
  }
`;
