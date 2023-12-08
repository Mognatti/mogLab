import styled from "styled-components";
import { GlobalButton } from "../../../../styles/global";

export const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2vw;
  margin: 10vh 4vw 5vh 6vw;
  height: 90vh;
`;

export const List = styled.ul`
  list-style: circle;
`;

export const Item = styled.li`
  margin-left: 1.5svw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh 0;
`;

export const Input = styled.input`
  width: 60%;
  padding: 10px;
  outline: 1px solid black;
  border-radius: 5px;
  border: none;
`;

export const Button = styled(GlobalButton)``;
