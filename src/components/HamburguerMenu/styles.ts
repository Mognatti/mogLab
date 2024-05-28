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
  transform-origin: center;
  transition: ${(props) =>
    props.active ? "transform 350ms ease-in-out, opacity 350ms" : "transform 350ms ease-in-out 350ms, opacity 350ms"};

  ${(props) =>
    props.active
      ? css`
          &:nth-of-type(1) {
            transform: translateY(10px) rotate(45deg);
          }
          &:nth-of-type(2) {
            opacity: 0;
            transform: translateX(200px);
          }
          &:nth-of-type(3) {
            transform: translateY(-20px) rotate(-45deg);
          }
        `
      : css`
          &:nth-of-type(1) {
            transform: translateY(0) rotate(0);
          }
          &:nth-of-type(2) {
            opacity: 1;
            animation: ${goLeft} 350ms ease-in-out 450ms;
          }
          &:nth-of-type(3) {
            transform: translateY(0) rotate(0);
          }
        `}
`;

const goLeft = keyframes`
  0% {
    transform: translateX(200px);
  }
  70% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(10px);
  }
`;
