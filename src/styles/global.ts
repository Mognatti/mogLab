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
      props.theme.title == "dark"
        ? props.theme.colors.black[400]
        : props.theme.colors.white[200]};
    color: ${(props) => props.theme.colors.black[900]};
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
/* Removes TinyMCE icon from the text editor */
  .tox .tox-statusbar__branding svg{
    display: none;
  }

/* Scroll bar styles */
::-webkit-scrollbar-thumb{
    background: ${(props) =>
      props.theme.title == "dark"
        ? props.theme.colors.yellow[500]
        : props.theme.colors.green[500]};
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
  padding: 8px;
  border-radius: 8px;
  background-color: transparent;
  transition: 350ms ease;
  outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
  border: none;
  width: 300px;
  color: ${(props) =>
    props.theme.title == "dark"
      ? props.theme.colors.white[500]
      : props.theme.colors.black[500]};
  &:hover {
    background-color: ${(props) => props.theme.colors.yellow[500]};
    outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
  }
`;
