import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  height: 15vh;
  background-color: ${(props) => props.theme.colors.blue[500]};
  color: ${(props) => props.theme.colors.white[500]};
`;

export const Content = styled.div`
  margin-left: 4vw;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  p {
    width: 65%;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1em;
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.white[500]};
  }
`;
