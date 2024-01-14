import { styled } from "styled-components";

export const MainContainer = styled.div`
  margin-top: 3svh;
  margin-left: 4svw;
  margin-right: 4svw;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-bottom: 2vh;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  gap: 1svh 0;
  margin: 2svh 4svw;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin-top: 8px;
  font-size: 1.1em;
  text-align: justify;
`;
export const LinkContainer = styled.div`
  display: flex;
  gap: 0 0.5em;
  align-items: center;
`;
