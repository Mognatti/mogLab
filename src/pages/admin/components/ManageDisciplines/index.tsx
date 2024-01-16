import { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import useFetchDisciplinesNames from "../../../../hooks/useFetchDisciplinesNames";
import { CurrentUser } from "../../../../context/authContext";
import useFetchDisciplines from "../../../../hooks/useFetchDisciplines";
import RegisteredDisciplines from "./Components/RegisteredDisciplines";
import DeleteDiscipline from "./Components/DeleteDiscipline";
import CreateDiscipline from "./Components/CreateDisciplines";
import AuthRedirectControl from "../AuthRedirectControl";
import DeleteDisciplinesModal from "./Components/DeleteDisciplinesModal";

export default function ManageDisciplines() {
  const [{ disciplinesNames, isDisciplinesNamesLoading }] = useFetchDisciplinesNames();
  const [{ deleteDiscipline, isDisciplinesLoading }] = useFetchDisciplines();
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(true);
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [deleteId, setDeleteId] = useState("");
  const { user } = useContext(CurrentUser);
  async function handleDeleteDiscipline(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await deleteDiscipline(deleteId);
  }

  useEffect(() => {
    setIsDeleteButtonDisabled(true);
    setTimeout(() => {
      setIsDeleteButtonDisabled(false);
    }, 5000);
  }, [confirmDeleteModal]);

  if (!user) {
    return <AuthRedirectControl user={user} args={[isDisciplinesNamesLoading, isDisciplinesLoading]} />;
  }

  return (
    <>
      <DeleteDisciplinesModal
        {...{
          confirmDeleteModal,
          handleDeleteDiscipline,
          isDeleteButtonDisabled,
          isDisciplinesLoading,
          setConfirmDeleteModal,
        }}
      />
      <RegisteredDisciplines
        isDisciplinesNamesLoading={isDisciplinesNamesLoading}
        disciplinesNames={disciplinesNames}
      />
      <hr />
      <S.EditorDiv>
        <CreateDiscipline title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} />
        <DeleteDiscipline
          deleteId={deleteId}
          disciplinesNames={disciplinesNames}
          setConfirmDeleteModal={setConfirmDeleteModal}
          setDeleteId={setDeleteId}
        />
      </S.EditorDiv>
    </>
  );
}
