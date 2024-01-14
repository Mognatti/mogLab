import styled from "styled-components";
import { GlobalButton, GlobalInput } from "../../../../styles/global";

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
  * {
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

export const Select = styled.select`
  border: none;
  width: 67%;
  border-radius: 8px;
  outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
  background: transparent;
  color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500])};
  padding: 8px;
  box-shadow: 3px 3px 5px
    ${(props) => (props.theme.title === "dark" ? props.theme.colors.yellow[300] : "rgba(0, 0, 0, 0.8)")};
  transition: 350ms;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, ${(props) => props.theme.colors.blue[500]} 50%),
    linear-gradient(135deg, ${(props) => props.theme.colors.blue[500]} 50%, transparent 60%),
    radial-gradient(${(props) => props.theme.colors.yellow[500]} 60%, transparent 70%);
  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
  background-repeat: no-repeat;

  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px
      ${(props) => (props.theme.title === "dark" ? props.theme.colors.yellow[300] : "rgba(0, 0, 0, 0.8)")};
    background-image: linear-gradient(45deg, ${(props) => props.theme.colors.yellow[500]} 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, ${(props) => props.theme.colors.yellow[500]} 50%),
      radial-gradient(${(props) => props.theme.colors.blue[500]} 70%, transparent 72%);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    border-color: green;
    outline: 0;
  }
  &:disabled {
    opacity: 0.7;
    box-shadow: 0px 0px 15px rgb(255, 0, 0);
    cursor: not-allowed;
  }

  option {
    background-color: ${(props) => props.theme.colors.blue[400]};
    outline: none;
    border: none;
  }
`;

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
