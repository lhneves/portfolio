import styled from '@emotion/styled';
import { Button } from '@nextui-org/react';

export const GradientDiv = styled.div`
  width: 100%;
  padding: 4px;

  border-radius: 0.75rem;
  background: linear-gradient(225deg, #976dff 0%, #4377ff 100%);
`;

export const CardStyled = styled.div`
  padding: 1.8rem;
  height: fit-content;
  border-radius: 0.6rem;
  background: #2d2d2d;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h2`
  background: linear-gradient(90deg, #4377ff 0%, #976dff 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;

  font-size: 2.1875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.03125rem;
  letter-spacing: 0.04375rem;
`;

export const QuestionTitle = styled.h4`
  color: #fff;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.03rem;
  margin-top: 10px;
`;

export const ButtonStyled = styled(Button)`
  margin-top: 10px;
  background: linear-gradient(90deg, #4378ffdd 0%, #966dffe2 80%);
`;
