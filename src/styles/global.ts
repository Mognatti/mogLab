import { Link } from "react-router-dom";
import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`
html{
    margin: 0;
    padding: 0;
    height: 100vh;
    color: ${(props) => props.theme.colors.black[900]};
}

body{
  background-color: ${(props) =>
    props.theme.title == "dark" ? props.theme.colors.black[400] : props.theme.colors.white[200]};
  color: ${(props) => props.theme.colors.black[900]};
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

}

ul, ol{
    padding: 0;
    margin: 0;
    list-style: none;
}

a{
    text-decoration: none;
    color: ${(props) => props.theme.colors.black[900]};
    transition: 350ms ease;
    &:hover{
      opacity: 0.6;
    }
   }
/* TinyMCE */
  .tox .tox-statusbar__branding svg{
    display: none;
  }

  
/* Scroll bar styles */
::-webkit-scrollbar-thumb{
    background: ${(props) =>
      props.theme.title == "dark" ? props.theme.colors.yellow[500] : props.theme.colors.green[500]};
    width: 1px;
   }

::-webkit-scrollbar-track{
  background: ${(props) => props.theme.colors.blue[500]};
}

::-webkit-scrollbar{
  width: 6px;
}

`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    opacity: 1;
  }
  &::after {
    content: "";
    background-color: ${(props) => props.theme.colors.yellow[500]};
    width: 0%;
    height: 1.5px;
    transition: width 350ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const GlobalButton = styled.button`
  border-radius: 8px;
  border: none;
  padding: 8px;
  width: 300px;
  background-color: transparent;
  color: ${(props) => (props.theme.title == "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500])};
  outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
  transition: 350ms ease;
  &:hover {
    background-color: ${(props) => props.theme.colors.yellow[500]};
  }
  &:disabled {
    opacity: ${(props) => (props.theme.title == "dark" ? "0.5" : "0.7")};
    outline: 1px solid red;
    &:hover {
      background-color: transparent;
      cursor: not-allowed;
    }
  }
`;

export const GlobalInput = styled.input`
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500])};
  padding: 8px;
  box-shadow: ${(props) => (props.theme.title === "dark" ? ` 0 0 5px ${props.theme.colors.yellow[300]}` : "none")};
  transition: 350ms;
  outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px ${(props) => (props.theme.title === "dark" ? props.theme.colors.yellow[300] : "none")};
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    outline: 1px solid red;
  }
`;
export const GlobalTextArea = styled.textarea`
  width: 30svw;
  height: 20svh;
  background-color: transparent;
  box-shadow: ${(props) => (props.theme.title === "dark" ? ` 0 0 5px ${props.theme.colors.yellow[300]}` : "none")};
  outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
  border: none;
  color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500])};
  resize: none;
  transition: 350ms;
  padding: 8px;
  border-radius: 8px;
  &:focus {
    transform: scale(1.02);
  }
`;

export const GlobalSelect = styled.select`
  border: none;
  width: 67%;
  border-radius: 8px;
  outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
  background: transparent;
  color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.white[500] : props.theme.colors.black[500])};
  padding: 8px 15px;
  box-shadow: ${(props) => (props.theme.title === "dark" ? ` 0 0 5px ${props.theme.colors.yellow[300]}` : "none")};
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
    box-shadow: 0px 0px 10px ${(props) => (props.theme.title === "dark" ? props.theme.colors.yellow[300] : "none")};
    background-image: linear-gradient(45deg, ${(props) => props.theme.colors.yellow[500]} 50%, transparent 50%),
      linear-gradient(135deg, transparent 50%, ${(props) => props.theme.colors.yellow[500]} 50%),
      radial-gradient(${(props) => props.theme.colors.blue[500]} 70%, transparent 72%);
    background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;
    border-color: green;
  }
  &:disabled {
    opacity: 0.7;
    box-shadow: 0px 0px 15px rgb(255, 0, 0);
    cursor: not-allowed;
  }

  option {
    background-color: ${(props) =>
      props.theme.title === "dark" ? props.theme.colors.blue[400] : props.theme.colors.yellow[500]};
  }
`;
