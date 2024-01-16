import React from "react";
import DefaultModal from "../../Modal";
import * as S from "../styles";
import { Spinner } from "react-bootstrap";

interface DisciplinesModalProps {
  confirmDeleteModal: boolean;
  setConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  isDisciplinesLoading: boolean;
  isDeleteButtonDisabled: boolean;
  handleDeleteDiscipline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<void>;
}

export default function DeleteDisciplinesModal({
  confirmDeleteModal,
  setConfirmDeleteModal,
  isDeleteButtonDisabled,
  isDisciplinesLoading,
  handleDeleteDiscipline,
}: DisciplinesModalProps) {
  return (
    <DefaultModal modalOpen={confirmDeleteModal} setModalOpen={setConfirmDeleteModal}>
      <S.ModalDiv>
        <h3>Você irá deletar a disciplina</h3>
        <h4>Tem certeza que deseja continuar?</h4>
        <S.ModalButtonDiv>
          <S.Button
            onClick={() => {
              setConfirmDeleteModal(false);
            }}
          >
            Cancelar
          </S.Button>
          <span>Essa ação não poderá ser desfeita e todos os artigos da disciplina serão perdidos!</span>
          <S.ConfirmDeleteButton disabled={isDeleteButtonDisabled} onClick={(e) => handleDeleteDiscipline(e)}>
            {isDisciplinesLoading || isDeleteButtonDisabled ? <Spinner size="sm" /> : "Sim, tenho certeza!"}
          </S.ConfirmDeleteButton>
        </S.ModalButtonDiv>
      </S.ModalDiv>
    </DefaultModal>
  );
}
