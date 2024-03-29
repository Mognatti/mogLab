import { useLocation, useNavigate, useParams } from "react-router-dom";
import useFetchDisciplines from "../../../hooks/useFetchDisciplines";
import Loader from "../../Loader";
import NotFound from "../../NotFound";
import { ArticleProps, DisciplinesProps } from "../../../types/globalTypes";
import * as S from "./styles";
import capitalizeWords from "../../../functions/capitalizeWords";
import { useEffect, useState } from "react";

interface DisciplineProps {
  setSelectedArticle: React.Dispatch<React.SetStateAction<ArticleProps | undefined>>;
}

export default function Discipline({ setSelectedArticle }: DisciplineProps) {
  const [{ disciplines, isDisciplinesLoading }] = useFetchDisciplines();
  const { discipline } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDiscipline, setSelectedDiscipline] = useState<DisciplinesProps | undefined>();
  const articleList = selectedDiscipline?.articles;

  useEffect(() => {
    const formattedDiscipline = discipline?.toLowerCase().trim();
    const foundDiscipline = disciplines.find((item) => item.title.toLowerCase().trim() === formattedDiscipline);
    setSelectedDiscipline(foundDiscipline);
  }, [discipline, disciplines]);

  if (isDisciplinesLoading) {
    return <Loader />;
  }
  if (!selectedDiscipline) {
    return <NotFound />;
  }
  if (articleList?.length == 0) {
    return (
      <S.Container>
        <S.Warning>A disciplina ainda não possui artigos cadastrados, aguarde atualizações!</S.Warning>
      </S.Container>
    );
  }

  function handleClick(article: ArticleProps) {
    setSelectedArticle(article);
    const currentPath = location.pathname;
    navigate(`${currentPath}/${article.title}`);
  }

  return (
    <>
      {selectedDiscipline && articleList && (
        <S.Container>
          <h3>Artigos</h3>
          <br />
          <S.List>
            {articleList.map((article) => (
              <S.TiltDiv
                key={article.id}
                glareMaxOpacity={0.1}
                glareEnable
                glareColor="#FFF"
                glarePosition="all"
                glareBorderRadius="5px"
              >
                <S.Card onClick={() => handleClick(article)}>
                  <h4>{capitalizeWords(article.title)}</h4>
                  <hr />
                  <div dangerouslySetInnerHTML={{ __html: article.content.slice(0, 150) + "..." }}></div>
                  <hr />
                  <S.AuthorContainer>
                    <S.Author>Autor - {article.author}</S.Author>
                  </S.AuthorContainer>
                </S.Card>
              </S.TiltDiv>
            ))}
          </S.List>
        </S.Container>
      )}
    </>
  );
}
