import styled from "styled-components";
import { GlobalButton, GlobalInput } from "../../../../../styles/global";

export const Form = styled.form`
  width: 90svw;
  display: flex;
  flex-direction: column;
  gap: 2svh;

  select {
    padding: 8px;
    width: 100%;
  }
`;

export const InputAndLabelContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  gap: 2svw;
`;

export const InputAndLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1svh 0;
`;

export const Input = styled(GlobalInput)`
  width: 95%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Button = styled(GlobalButton)``;
