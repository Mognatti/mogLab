import { Spinner } from "react-bootstrap";
import usePostDiscipline from "../../../../hooks/usePostDiscipline";
import { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import useFetchDisciplinesNames from "../../../../hooks/useFetchDisciplinesNames";
import { CurrentUser } from "../../../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function ManageDisciplines() {
  const [{ disciplinesNames, isDisciplinesNamesLoading }] = useFetchDisciplinesNames();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const { user } = useContext(CurrentUser);
  const navigate = useNavigate();

  const [{ postNewDiscipline, isLoading, message }] = usePostDiscipline();

  async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await postNewDiscipline(title, desc);
    setTitle("");
    setDesc("");
    window.location.reload();
  }

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <S.DivContainer>
      <S.Form>
        <h4>Criador de disciplinas</h4>
        <S.Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Nome da disciplina..." />
        <S.TextArea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Descrição da disciplina..." />
        <S.Button onClick={(e) => handleClick(e)}>{isLoading ? <Spinner /> : "Cadastrar"}</S.Button>
        {message && <p>{message}</p>}
      </S.Form>
      <hr />
      <div>
        <h3>Disciplinas Cadastradas</h3>
        <S.List>
          {isDisciplinesNamesLoading ? (
            <Spinner size="sm" />
          ) : (
            disciplinesNames.map((discipline) => <S.Item key={discipline}>{discipline}</S.Item>)
          )}
        </S.List>
      </div>
    </S.DivContainer>
  );
}
