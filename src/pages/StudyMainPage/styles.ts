import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const MainContainer = styled.div`
  margin-top: 15vh;
  margin-left: 4vw;
  margin-right: 4vw;
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
  margin: 2svh 0 2svh 0;
`;

export const Item = styled.li`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  margin-top: 8px;
  font-size: 1.1em;
  text-align: justify;
`;

export const LinkTo = styled(Link)`
  display: inline;
`;

export const LinkSpan = styled.span`
  transition: padding 350ms;
  border-bottom: 1px solid;
  &:hover {
    padding: 0 2px;
  }
`;
