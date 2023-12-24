import { useState } from "react";
import useFetchDisciplinesNames from "../../../../hooks/useFetchDisciplinesNames";
import Loader from "../../../StudyMainPage/Discipline/Loader";
import CreateArticles from "./CreateArticles";
import * as S from "./styles";
import EditArticles from "./EditArticles";

export default function ManageArticles() {
  const [{ disciplinesNames, isDisciplinesNamesLoading }] = useFetchDisciplinesNames();
  const [createArticle, setCreateArticle] = useState<boolean>(true);

  if (isDisciplinesNamesLoading) {
    return <Loader />;
  }
  return (
    <S.Container>
      <S.FieldSet>
        <S.Button id="create-article" onClick={() => setCreateArticle(true)}>
          Criar artigo
        </S.Button>
        <S.Button id="edit-article" onClick={() => setCreateArticle(false)}>
          Editar artigo
        </S.Button>
      </S.FieldSet>
      {createArticle ? <CreateArticles {...{ disciplinesNames }} /> : <EditArticles {...{ disciplinesNames }} />}
    </S.Container>
  );
}
