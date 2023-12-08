import { styled } from "styled-components";
import { StyledLink } from "../../styles/global";

export const PageHeader = styled.header<{ scrolling: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 350ms;
  background-color: ${(props) =>
    props.scrolling ? props.theme.colors.blue[500] : "transparent"};
  z-index: 999;
`;

export const Title = styled.p<{ scrolling: boolean }>`
  margin: 0;
  margin-left: 3vw;
  font-size: 1.2em;
  color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.white[900]
      : props.scrolling
      ? props.theme.colors.white[500]
      : props.theme.colors.black[500]};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 4vw;
`;

export const NavLink = styled(StyledLink)<{
  scrolling: boolean;
}>`
  color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.white[900]
      : props.scrolling
      ? props.theme.colors.white[500]
      : props.theme.colors.black[500]};
`;
