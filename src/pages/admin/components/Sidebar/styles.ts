import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosHome } from "react-icons/io";
import { SiBookstack } from "react-icons/si";
import { TbWorldShare } from "react-icons/tb";
import { PiArticleNyTimes } from "react-icons/pi";

export const LinkText = styled.span`
  opacity: 0;
  transition: all 450ms ease;
  position: absolute;
  left: -100px;
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
  background-color: ${(props) => props.theme.colors.blue[500]};
  z-index: 99;
  &:hover {
    width: 15vw;
  }
  &:hover ${LinkText} {
    opacity: 1;
    margin: 0;
    position: relative;
    left: 0;
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
  color: ${(props) => props.theme.colors.white[500]};

  &:hover {
    margin-left: 1vw;
  }
`;

export const HomeIcon = styled(IoIosHome)``;
export const DisciplinesIcon = styled(SiBookstack)``;
export const ArticleIcon = styled(PiArticleNyTimes)``;
export const WebsiteIcon = styled(TbWorldShare)``;
