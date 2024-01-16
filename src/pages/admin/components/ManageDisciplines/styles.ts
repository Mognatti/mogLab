import styled from "styled-components";
import { GlobalButton, GlobalInput, GlobalSelect, GlobalTextArea } from "../../../../styles/global";

export const RegisteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8svh;
  padding-bottom: 5svh;
  @media (max-width: 500px) {
    margin-left: 14svw;
  }
`;

export const EditorDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2svw;
  margin: 8svh 4svw 5svh 6svw;
  hr {
    width: 100%;
    color: ${(props) => (props.theme.title == "dark" ? props.theme.colors.yellow[800] : props.theme.colors.blue[500])};
  }
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 10svh 0;
  }
  @media (max-width: 500px) {
    margin-left: 20svw;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1svw;
  @media (max-width: 500px) {
    text-align: center;
  }
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
  p {
    text-align: justify;
  }
  input,
  select,
  button,
  textarea,
  p {
    width: 65%;
  }
  h3,
  h4,
  h5 {
    text-align: center;
    margin: 0;
  }
  @media (max-width: 1200px) {
    input,
    textarea,
    button,
    select,
    p {
      width: 300px;
    }
  }
  @media (max-width: 600px) {
    input,
    textarea,
    button,
    select,
    p {
      width: 250px;
    }
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
  justify-content: center;
  text-align: center;
  height: 100%;
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
