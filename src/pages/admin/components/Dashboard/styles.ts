import styled from "styled-components";
import { GlobalButton, GlobalInput } from "../../../../styles/global";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FiSave } from "react-icons/fi";
import { Spinner } from "react-bootstrap";

//Modal ---------------------------------

export const InputModal = styled(GlobalInput)`
  cursor: pointer;
  &:hover {
    transform: scale(1.02);
  }
  &:focus {
    transform: none;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
`;

//End of Modal -------------------------

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 5vh 2vw;
  margin-top: 5vh;
`;

export const ImageContainer = styled.div`
  transition: 350ms;
  margin-left: 3svw;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export const UserImage = styled.img`
  width: 15svw;
  transition: 350ms;
  border-radius: 30%;
  min-width: 200px;
`;

export const PencilIconForImage = styled(HiOutlinePencilSquare)`
  margin-top: 85%;
  margin-left: -6%;
  color: ${(props) => props.theme.colors.yellow[500]};
  transition: 350ms;
  border-radius: 30%;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Input = styled(GlobalInput)`
  padding: 12px;
  width: 300px;
`;

export const PencilIcon = styled(HiOutlinePencilSquare)<{ editing: boolean }>`
  cursor: pointer;
  transition: 350ms;
  position: ${(props) => (props.editing ? "fixed" : "relative")};
  margin-left: ${(props) => (props.editing ? "0" : "-30px")};
  right: ${(props) => (props.editing ? "-50px" : "auto")};
  opacity: ${(props) => (props.editing ? "0" : "1")};
  color: ${(props) => props.theme.colors.yellow[500]};
  &:hover {
    transform: scale(1.3);
  }
`;
export const SaveIcon = styled(FiSave)<{ editing: boolean }>`
  cursor: pointer;
  z-index: 2;
  position: ${(props) => (props.editing ? "relavive" : "fixed")};
  margin-left: ${(props) => (props.editing ? "-30px" : "0px")};
  right: ${(props) => (props.editing ? "auto" : "-50px")};
  opacity: ${(props) => (props.editing ? "1" : "0")};
  color: ${(props) => props.theme.colors.yellow[500]};
  transition: 350ms;
  &:hover {
    transform: scale(1.3);
  }
`;

export const Loading = styled(Spinner)`
  margin-left: 2svw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5svh;
`;

export const Button = styled(GlobalButton)`
  width: 10%;
  min-width: 250px;
`;
