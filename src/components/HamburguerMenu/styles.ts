import { styled, css, keyframes } from "styled-components";
import { StyledLink } from "../../styles/global";

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
  height: 22svh;
  z-index: 1;
`;

export const HamburguerNavLink = styled(StyledLink)<{ show: boolean }>`
  color: ${(props) => (props.theme.title === "dark" ? props.theme.colors.blue[500] : props.theme.colors.black[500])};
  position: absolute;
  transition: 350ms ease-in-out;
  left: ${(props) => (props.show ? "5svw" : "100svw")};
  &:nth-of-type(1) {
    top: 2vh;
    top: 2svh;
  }
  &:nth-of-type(2) {
    top: 6vh;
    top: 6svh;
  }
  &:nth-of-type(3) {
    top: 10vh;
    top: 10svh;
    width: 100%;
  }
  &:nth-of-type(4) {
    top: 14vh;
    top: 14svh;
    width: 100%;
  }
`;

export const HamburguerButton = styled.button`
  position: absolute;
  right: 2svw;
  z-index: 99;
  padding: 2px;
  transition: 350ms ease-in-out;
  background: transparent;
  border-radius: 1rem;
  border: none;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const HamburguerSVG = styled.svg<{ scrolling: boolean }>`
  fill: ${(props) =>
    props.theme.title === "dark"
      ? props.theme.colors.white[900]
      : props.scrolling
      ? props.theme.colors.white[500]
      : props.theme.colors.blue[400]};
`;

export const HamburguerLines = styled.rect<{ active: boolean }>`
  transition: ${(props) =>
    props.active
      ? "y 350ms ease-in-out, rotate 350ms ease-in-out 350ms, opacity 350ms, x 350ms"
      : "y 350ms ease-in-out 350ms, rotate 350ms ease-in-out, opacity 350ms, x 450ms 350ms"};
  transform-origin: center;
  ${(props) =>
    props.active
      ? ` &:nth-of-type(1) {
      y: 45;
      rotate: 45deg;
    }
    &:nth-of-type(2) {
      opacity:0;
      x:200;
      
    }
    &:nth-of-type(3) {
      y: 45;
      rotate: -45deg;
    }`
      : css`
          &:nth-of-type(2) {
            animation: ${goLeft} 350ms ease-in-out 450ms;
          }
        `}
`;

const goLeft = keyframes`
0%{
x:200;
}

70%{
x:5;
}

100%{
x:10;
}
`;
