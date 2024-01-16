import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-shrink: 0; /* Impede que o footer encolha quando o conteúdo cresce */
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color: ${(props) => props.theme.colors.blue[500]};
  color: ${(props) => props.theme.colors.white[500]};
  flex: 1; /* Faz com que este conteúdo ocupe o espaço disponível */
`;

export const Content = styled.div`
  margin-left: 4vw;
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1em;
  align-items: center;
  a {
    color: ${(props) => props.theme.colors.white[500]};
  }
`;
