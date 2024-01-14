import styled from "styled-components";
import Tilt from "react-parallax-tilt";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5svh 4svw 0svh 4svw;
  min-height: 67svh;
  h3 {
    margin-top: -15svh;
    margin-bottom: 5svh;
  }
`;

export const Warning = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65svh;
  font-weight: 500;
  font-size: 1.5em;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  align-items: center;
  gap: 2svw;
  margin: 2svh 2svw 2svh 2svw;
  justify-content: center;
`;

export const TiltDiv = styled(Tilt)`
  width: 28%;
`;

export const Card = styled.li`
  position: relative;
  width: 100%;
  height: 275px;
  text-align: justify;
  padding: 16px;
  box-shadow: 0px 0px 3px ${(props) => props.theme.colors.yellow[500]};
  &:hover {
    cursor: pointer;
  }
  h4 {
    font-size: 1.3em;
  }
  hr {
    color: ${(props) => props.theme.colors.yellow[500]};
  }
`;

export const AuthorContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  right: 1svw;
  bottom: 1svw;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Author = styled.p`
  text-align: end;
  margin: 0;
`;
