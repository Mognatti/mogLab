import styled from "styled-components";
import { GlobalButton, GlobalInput } from "../../../../styles/global";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  margin: 10vh 4vw 5vh 6vw;
  height: 90vh;

  hr {
    width: 100%;
    color: ${(props) => (props.theme.title == "dark" ? props.theme.colors.yellow[800] : props.theme.colors.blue[500])};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: circle;
`;

export const Item = styled.li`
  margin-left: 1.5svw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh 0;
`;

export const Input = styled(GlobalInput)`
  width: 100%;
`;

export const TextArea = styled.textarea`
  width: 30svw;
  height: 20svh;
  background-color: transparent;
  box-shadow: 0px 0px 5px ${(props) => props.theme.colors.yellow[500]};
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.white[500]};
  resize: none;
  transition: 350ms;
  padding: 8px;
  border-radius: 8px;
  &:focus {
    transform: scale(1.02);
  }
`;

export const Button = styled(GlobalButton)``;
