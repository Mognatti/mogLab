import React from "react";
import * as S from "../styles";
import usePostNewDiscipline from "../../../../../hooks/usePostDiscipline";
import { Spinner } from "react-bootstrap";

interface CreateDisciplineProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  desc: string;
  setDesc: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreateDiscipline({ setTitle, setDesc, title, desc }: CreateDisciplineProps) {
  const [{ postNewDiscipline, isLoading, errorMessage }] = usePostNewDiscipline();

  async function handleCreateDiscipline(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    await postNewDiscipline(title.toLowerCase(), desc);
    setTitle("");
    setDesc("");
    window.location.reload();
  }

  return (
    <S.Form>
      <h4>Cadastrar Disciplina</h4>
      <S.Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nome da disciplina (pelo menos 3 caracteres)"
      />
      <S.TextArea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Descrição da disciplina (pelo menos 20 caracteres)"
      />
      <S.Button onClick={(e) => handleCreateDiscipline(e)} disabled={title.length < 3 || desc.length < 20}>
        {isLoading ? <Spinner size="sm" /> : "Cadastrar"}
      </S.Button>
      {errorMessage && <p>{errorMessage}</p>}
    </S.Form>
  );
}
