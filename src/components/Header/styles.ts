import { styled } from "styled-components";
import { StyledLink } from "../../styles/global";
import { RxHamburgerMenu } from "react-icons/rx";

export const PageHeader = styled.header<{ scrolling: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  min-width: 100svw;
  min-height: 8vh;
  margin-inline: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  transition: 350ms;
  background-color: ${(props) => (props.scrolling ? props.theme.colors.blue[500] : "transparent")};
  z-index: 999;
  @media (max-width: 751px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    p {
      text-align: center;
    }
  }
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
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 4vw;
`;

export const NavLink = styled(StyledLink)<{ scrolling: boolean }>`
  color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.white[900]
      : props.scrolling
      ? props.theme.colors.white[500]
      : props.theme.colors.black[500]};
`;

export const HamburgerMenu = styled(RxHamburgerMenu)<{ scrolling: boolean }>`
  position: absolute;
  right: 2svw;
  z-index: 99;
  padding: 2px;
  color: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.white[900]
      : props.scrolling
      ? props.theme.colors.white[500]
      : props.theme.colors.black[500]};
  transition: 350ms ease-in-out;
`;

export const HamburguerList = styled.ul<{ show: boolean }>`
  display: flex;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: 350ms ease-in-out;
  flex-direction: column;
  justify-content: center;
  gap: 1svh 0;
  position: absolute;
  right: ${(props) => (props.show ? "1svw" : "-60svw")};
  top: 1.5svh;
  background-color: ${(props) => props.theme.colors.yellow[500]};
  padding: 16px;
  border-radius: 8px;
  width: 180px;
  height: 20svh;
  z-index: 1;
`;

export const HamburguerNavLink = styled(StyledLink)<{ show: boolean }>`
  color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.blue[500] : props.theme.colors.black[500])};
  position: absolute;
  transition: 350ms ease-in-out;
  left: ${(props) => (props.show ? "5svw" : "100svw")};
  &:nth-of-type(1) {
    top: 2svh;
  }
  &:nth-of-type(2) {
    top: 6svh;
  }
  &:nth-of-type(3) {
    top: 10svh;
    width: 100%;
  }
  &:nth-of-type(4) {
    top: 14svh;
    width: 100%;
  }
`;
