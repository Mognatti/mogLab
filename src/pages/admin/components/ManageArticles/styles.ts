import { DivContainer } from "../../styles";
import { styled } from "styled-components";

export const Container = styled(DivContainer)`
  align-items: center;
  justify-content: center;
  margin-top: 5svh;
`;

export const FieldSet = styled.fieldset`
  display: flex;
  gap: 10svh;
  margin-bottom: 2svh;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1svh;
`;

export const NavLink = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &::after {
    content: "";
    background-color: ${(props) => props.theme.colors.yellow[500]};
    width: 0%;
    height: 1.5px;
    transition: width 350ms ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
