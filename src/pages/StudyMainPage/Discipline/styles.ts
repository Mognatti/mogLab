import styled from "styled-components";
import Tilt from "react-parallax-tilt";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5svh 4svw 0svh 4svw;
  min-height: 64.7svh;
  @media (max-width: 750px) {
    margin: 0svh 4svw;
  }
`;

export const Warning = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65svh;
  font-weight: 500;
  font-size: 1.5em;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  gap: 5svh 2svw;
  margin: 2svh 2svw 2svh 2svw;
  justify-content: center;
`;

export const TiltDiv = styled(Tilt)`
  min-width: 340px;
  max-width: 340px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  word-wrap: break-word;
  position: relative;
  max-width: 100%;
  height: 275px;
  text-align: justify;
  padding: 16px;
  outline: 1px solid
    ${(props) => (props.theme.title === "dark" ? props.theme.colors.yellow[500] : props.theme.colors.blue[500])};

  &:hover {
    cursor: pointer;
  }
  h4 {
    font-size: 1.3em;
  }
  hr {
    color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.yellow[500] : props.theme.colors.blue[500])};
  }
`;

export const AuthorContainer = styled.div`
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Author = styled.p`
  text-align: end;
  margin: 0;
`;
