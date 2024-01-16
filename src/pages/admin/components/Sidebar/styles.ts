import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosHome } from "react-icons/io";
import { SiBookstack } from "react-icons/si";
import { TbWorldShare } from "react-icons/tb";
import { PiArticleNyTimes } from "react-icons/pi";

export const ThemeSwitcherContainer = styled.div`
  position: absolute;
  top: 5svh;
  right: 2svw;
  @media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    top: 3svh;
  }
`;

export const LinkText = styled.span`
  opacity: 0;
  transition: all 450ms ease;
  position: absolute;
  left: -100px;
`;

export const SidebarDiv = styled.div<{ path: string }>`
  display: ${(props) => (props.path.includes("admin") ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: 350ms;
  background-color: ${(props) => props.theme.colors.blue[500]};
  z-index: 99;
  &:hover {
    width: 15svw;
    @media (max-width: 861px) {
      width: 20svw;
    }
    @media (max-width: 640px) {
      width: 35svw;
    }
  }
  &:hover ${LinkText} {
    opacity: 1;
    margin: 0;
    position: relative;
    left: 0;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
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
