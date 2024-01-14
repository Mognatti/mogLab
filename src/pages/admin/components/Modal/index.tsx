import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";

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
  height: 45svh;
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

interface ModalProps {
  children: ReactNode;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalOpen: boolean;
}
export default function DefaultModal({ children, setModalOpen, modalOpen }: ModalProps) {
  const ModalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    });
  }, [setModalOpen, modalOpen]);

  useEffect(() => {
    ModalRef.current?.addEventListener("click", () => {
      setModalOpen(false);
    });
  }, [setModalOpen, modalOpen]);

  return (
    <ModalContainer>
      <ModalBg ref={ModalRef} display={modalOpen} />
      <ModalContent display={modalOpen}>{children}</ModalContent>
    </ModalContainer>
  );
}
