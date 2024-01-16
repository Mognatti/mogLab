import styled from "styled-components";
import { GlobalButton, GlobalInput, GlobalTextArea } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  height: 83svh;
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
  width: 30%;
`;

export const TextArea = styled(GlobalTextArea)`
  resize: none;
  width: 30%;
  height: 15vh;
`;

export const BookImage = styled.img`
  width: 28vw;
  position: absolute;
  left: 2vw;
`;

export const ScientisImg = styled.img`
  width: 31vw;
  position: absolute;
  right: 2vw;
`;

export const Button = styled(GlobalButton)``;
