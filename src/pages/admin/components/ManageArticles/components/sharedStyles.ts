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
  @media (max-width: 930px) {
    width: 70svw;
  }
`;

export const InputAndLabelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 2svw;
  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
`;

export const InputAndLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1svh 0;
`;

export const Input = styled(GlobalInput)`
  width: 95%;
  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 3svw;
`;
export const Button = styled(GlobalButton)``;
