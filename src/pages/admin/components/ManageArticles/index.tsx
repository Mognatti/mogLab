import { useContext, useState } from "react";
import useFetchDisciplinesNames from "../../../../hooks/useFetchDisciplinesNames";
import CreateArticles from "./CreateArticles";
import * as S from "./styles";
import EditArticles from "./EditArticles";
import { CurrentUser } from "../../../../context/authContext";
import AuthRedirectControl from "../AuthRedirectControl";

export default function ManageArticles() {
  const [{ disciplinesNames, isDisciplinesNamesLoading }] = useFetchDisciplinesNames();
  const [createArticle, setCreateArticle] = useState<boolean>(true);
  const { user } = useContext(CurrentUser);

  if (!user) {
    return <AuthRedirectControl user={user} args={[isDisciplinesNamesLoading]} />;
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
