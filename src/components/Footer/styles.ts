import { styled } from "styled-components";

export const FooterContainer = styled.footer<{ path: string }>`
  display: ${(props) => (props.path.includes("disciplinas/") ? "none" : "flex")};
  align-items: center;
  width: 100%;
  height: 15svh;
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
  width: 100%;
`;
