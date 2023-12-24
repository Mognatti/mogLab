import styled from "styled-components";
import { IoIosReturnLeft } from "react-icons/io";
import { RiMenuUnfoldLine } from "react-icons/ri";

export const LinkText = styled.span`
  opacity: 0;
  transition: all 450ms ease;
  position: absolute;
  left: -100px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70svh;
  gap: 3svh 0;
  opacity: 0.5;
  transition: 350ms ease;
  margin-top: 4svh;
  overflow-y: scroll;
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1svw;
  margin: 3svh 2svw 0 0;
  transition: 350ms;
  cursor: default;
`;

export const Icon = styled(RiMenuUnfoldLine)`
  transition: 350ms ease;
`;

export const SidebarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 20svw;
  height: 100%;
  position: absolute;
  left: -10svw;
  top: 0;
  transition: 350ms;
  background-color: ${(props) => props.theme.colors.blue[500]};
  color: ${(props) => props.theme.colors.white[500]};
  z-index: 99;

  &::after {
    content: "";
    position: absolute;
    height: 0;
    top: -1px;
    transition: 450ms;
    outline: 1px solid ${(props) => props.theme.colors.yellow[500]};
    left: 20svw;
  }

  &:hover {
    left: 0;
    &::after {
      height: 100%;
    }
  }

  &:hover ${Title} {
    gap: 4.8svw;
  }

  &:hover ${Icon} {
    transform: rotateY(180deg);
  }

  &:hover ${LinkText} {
    opacity: 1;
    margin: 0;
    position: relative;
    left: 0;
  }

  &:hover ${NavList} {
    opacity: 1;
  }
`;

export const NavLink = styled.li`
  display: flex;
  align-items: center;
  justify-items: center;
  transition: 450ms ease;
  cursor: pointer;
  &:hover {
    margin-left: 2vw;
  }
`;

export const GoBack = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1svw;
  position: absolute;
  bottom: 5svh;
  left: 1svw;
`;

export const ReturnIcon = styled(IoIosReturnLeft)``;
