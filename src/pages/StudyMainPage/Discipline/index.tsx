import { useParams } from "react-router-dom";
import useFetchDisciplines from "../../../hooks/useFetchDisciplines";
import Loader from "./Loader";
import NotFound from "../../NotFound";
import { ArticleProps } from "../../../types/globalTypes";
import { useState } from "react";
import Article from "./Article";
import StudySidebar from "./StudySidebar";
import * as S from "./styles";

export default function Discipline() {
  const [{ disciplines, isDisciplinesLoading }] = useFetchDisciplines();
  const { discipline } = useParams();
  const selectedDiscipline = disciplines.find((item) => item.title.toLowerCase() === discipline);
  const articleList = selectedDiscipline?.articles;
  const [selectedArticle, setSelectedArticle] = useState<ArticleProps>();

  if (isDisciplinesLoading) {
    return <Loader />;
  } else if (!selectedDiscipline) {
    return <NotFound />;
  } else if (articleList?.length == 0) {
    return (
      <S.Container>
        <StudySidebar {...{ articleList, selectedArticle, setSelectedArticle }} />
        <S.Warning>Disciplina ainda não possui artigos cadastrados, aguarde atualizações!</S.Warning>
      </S.Container>
    );
  }

  return (
    <>
      {selectedDiscipline && articleList && (
        <S.Container>
          <StudySidebar {...{ articleList, selectedArticle, setSelectedArticle }} />
          <Article {...(selectedArticle ?? articleList[0])} />
        </S.Container>
      )}
    </>
  );
}
