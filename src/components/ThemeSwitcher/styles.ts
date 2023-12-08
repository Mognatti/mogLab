import { Form } from "react-bootstrap";
import { FaMoon, FaSun } from "react-icons/fa";
import styled from "styled-components";

export const ThemeDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: absolute;
  right: 5vw;
`;

export const ThemeSwitch = styled(Form.Switch)`
  margin-left: 2vw;
  input {
    cursor: pointer;
  }
`;

export const IconRotationDiv = styled.div<{ clicked?: boolean }>`
  width: 70px;
  margin-left: -25px;
  display: flex;
  justify-content: space-between;
  transition: 350ms ease-in-out;
  transform: ${(props) => (props.clicked ? "none" : "rotate(180deg)")};
`;

export const SunIcon = styled(FaSun)<{ show: string }>`
  color: ${(props) => props.theme.colors.green[700]};
  opacity: ${(props) => (props.show === "light" ? 1 : 0)};
  transition: 350ms;
`;

export const MoonIcon = styled(FaMoon)<{ show: string }>`
  color: ${(props) => props.theme.colors.yellow[700]};
  opacity: ${(props) => (props.show === "dark" ? 1 : 0)};
  transform: rotate(180deg);
  transition: 350ms;
`;
