import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosHome } from "react-icons/io";
import { SiBookstack } from "react-icons/si";

export const LinkText = styled.span`
  display: none;
  opacity: 0;
  transition: 450ms ease;
`;

export const ThemeSwitcherContainer = styled.li`
  position: absolute;
  top: 15px;
  right: -97px;
`;

export const SidebarDiv = styled.div<{ path: string }>`
  display: ${(props) => (props.path.includes("admin") ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 4vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: 350ms;
  background-color: ${(props) => props.theme.colors.blue[300]};
  z-index: 99;
  &:hover {
    width: 15vw;
  }
  &:hover ${LinkText} {
    opacity: 1;
    display: flex;
  }
  &:hover ${ThemeSwitcherContainer} {
    right: -30px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  gap: 5vh 0;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1vw;

  &:hover {
    margin-left: 1vw;
  }
`;

export const HomeIcon = styled(IoIosHome)`
  color: ${(props) => props.theme.colors.green};
`;
export const DisciplinesIcon = styled(SiBookstack)``;
