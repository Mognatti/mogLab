import styled from "styled-components";
import { GlobalButton, GlobalInput, GlobalSelect, GlobalTextArea } from "../../../../styles/global";

export const RegisteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8svh;
  padding-bottom: 5svh;
`;

export const EditorDiv = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  gap: 2vw;
  margin: 8svh 4svw 5svh 6svw;
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
  margin-left: 1svw;
`;

export const Item = styled.li`
  margin-left: 1.5svw;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 3vh 0;
  height: 380px;
  input,
  select,
  button,
  p {
    width: 67%;
  }
  p {
    text-align: justify;
  }
  h3,
  h4,
  h5 {
    text-align: center;
    margin: 0;
  }
`;

export const Input = styled(GlobalInput)`
  width: 67%;
`;

export const TextArea = styled(GlobalTextArea)``;

export const Select = styled(GlobalSelect)``;

export const Button = styled(GlobalButton)``;

// Modal ---------------------------------

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  margin: 3svh 3svw;
  gap: 3svh;

  h3 {
    margin: 0;
  }
  h4 {
    margin: -1svh 0 0 0;
  }
`;

export const ModalButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3svh;
  align-items: center;
`;

export const ConfirmDeleteButton = styled(Button)`
  background-color: red;
`;
// End of Modal -------------------------
