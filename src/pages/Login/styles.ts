import styled from "styled-components";

export const Form = styled.form`
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;

  input {
    padding: 12px;
    width: 30%;
  }

  label {
    text-align: left;
  }
`;
