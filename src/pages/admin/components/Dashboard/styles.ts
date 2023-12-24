import styled from "styled-components";
import { GlobalButton, GlobalInput } from "../../../../styles/global";
import { HiOutlinePencilSquare } from "react-icons/hi2";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2vh 2vw;
  margin-top: 2vh;
`;

export const UserImage = styled.img`
  width: 15svw;
  transition: 350ms;
  border-radius: 30%;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Button = styled(GlobalButton)`
  width: 10%;
`;

export const ModalContainer = styled.div`
  overflow: hidden;
`;

export const ModalBg = styled.div<{ display: boolean }>`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow: hidden;
  z-index: 99;
  top: ${(props) => (props.display ? "0" : "-200%")};
  left: 0;
  width: 100%;
  height: 100%;
  transition: 350ms;
`;
export const ModalContent = styled.div<{ display: boolean }>`
  position: fixed;
  overflow: hidden;
  gap: 5svh 0;
  top: 17%;
  left: ${(props) => (props.display ? "30%" : "150%")};
  width: 45svw;
  height: 40svh;
  background: ${(props) => props.theme.colors.blue[400]};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  transition: 350ms ease-in;
  padding: 16px;
  box-shadow: 5px 5px 15px ${(props) => props.theme.colors.black[400]};

  h3 {
    margin-top: 4svh;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled(GlobalInput)`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  &:focus {
    transform: none;
  }
`;

export const PencilIcon = styled(HiOutlinePencilSquare)<{ input: boolean }>`
  cursor: pointer;
  transition: 350ms;
  margin-left: ${(props) => (props.input ? "-20px" : "0")};
  position: ${(props) => (props.input ? "relative" : "absolute")};
  bottom: ${(props) => (props.input ? "auto" : "52%")};
  left: ${(props) => (props.input ? "auto" : "58%")};
  color: ${(props) => props.theme.colors.yellow[500]};
  &:hover {
    transform: scale(1.3);
  }
`;
