import styled from "styled-components";
import { GlobalButton, GlobalInput, GlobalTextArea } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  min-height: 83svh;
  h3 {
    margin-top: -5svh;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
`;

export const Input = styled(GlobalInput)`
  min-width: 30%;
  @media (max-width: 880px) {
    min-width: 60%;
  }
  @media (max-width: 485px) {
    min-width: 300px;
  }
`;

export const TextArea = styled(GlobalTextArea)`
  resize: none;
  width: 30%;
  height: 15vh;
  @media (max-width: 880px) {
    min-width: 60%;
  }
  @media (max-width: 485px) {
    min-width: 300px;
  }
`;

export const BookImage = styled.img`
  width: 28svw;
  min-width: 290px;
  position: absolute;
  left: 2svw;
  @media (max-width: 880px) {
    display: none;
  }
`;

export const ScientisImg = styled.img`
  width: 31vw;
  min-width: 320px;
  position: absolute;
  right: 2vw;
  @media (max-width: 880px) {
    display: none;
  }
`;

export const Button = styled(GlobalButton)``;
