import styled from "styled-components";
import { GlobalButton } from "../../styles/global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
  height: 100vh;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3vh;
`;

export const Input = styled.input<{ message: boolean }>`
  width: 30%;
  padding: 8px;
  border: ${(props) => (props.message ? "1px solid" : "none")};
  border-bottom: ${(props) => (props.message ? "" : "1px solid")};
  height: ${(props) => (props.message ? "150px" : "auto")};
`;

export const TextArea = styled.textarea`
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
