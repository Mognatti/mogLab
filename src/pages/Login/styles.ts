import { GlobalButton, GlobalInput } from "./../../styles/global";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  min-height: 85svh;
  margin-top: -2svh;
  @media (max-width: 972px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;
  width: 100%;
  height: 100%;
  border-right: 1px solid;
  label {
    text-align: left;
    width: 80%;
  }
  hr {
    width: 80%;
    margin: 0;
    margin-bottom: 2svh;
    color: ${(props) => props.theme.colors.yellow[500]};
  }
  span {
    text-align: center;
  }
`;

export const Input = styled(GlobalInput)`
  width: 80%;
  padding: 12px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.yellow[400]};
  @media (max-width: 650px) {
    display: none;
  }
`;

export const AuthImage = styled.img`
  width: 500px;
`;

export const ErrorMessageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1svh;
  margin-left: -2svw;
  margin-top: 1svh;
  color: red;
`;

export const Button = styled(GlobalButton)`
  margin-top: 1svh;
`;
