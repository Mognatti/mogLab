import { useEffect, useState } from "react";
import TextEditor from "../components/TextEditor";
import DisciplineSelector from "../components/DisciplineSelector";
import useArticle from "../../../../../hooks/useArticle";
import useFetchArticles from "../../../../../hooks/useFetchArticles";
import { Spinner } from "react-bootstrap";
import * as S from "../components/sharedStyles";
import { DisciplineNameAndId } from "../../../../../types/globalTypes";
import ArticleSelector from "../components/ArticleSelector";

interface EditArticlesProps {
  disciplinesNames: DisciplineNameAndId[];
}

export default function EditArticles({ disciplinesNames }: EditArticlesProps) {
  const [selectedArticle, setSelectedArticle] = useState<string>("");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");
  const [{ articleList, fetchArticles, isArticlesListLoading }] = useFetchArticles();
  const [{ isLoading, updateArticle }] = useArticle();
  const selectedArticleData = articleList.find((item) => item.id === selectedArticle);
  const [newContent, setNewContent] = useState(selectedArticleData?.content ?? "");
  const [newTitle, setNewTitle] = useState(selectedArticleData?.title ?? "");
  const [newAuthor, setNewAuthor] = useState(selectedArticleData?.author ?? "");
  useEffect(() => {
    async function updateDom() {
      if (selectedDiscipline) {
        await fetchArticles(selectedDiscipline);
      }
    }
    updateDom();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDiscipline]);

  useEffect(() => {}, [articleList]);

  async function saveData(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    try {
      if (selectedArticleData) {
        const modifedArticle = {
          title: newTitle.toLowerCase() || selectedArticleData.title.toLowerCase(),
          author: newAuthor || selectedArticleData.author,
          content: newContent,
          id: selectedArticleData.id,
        };
        const res = await updateArticle(selectedDiscipline, modifedArticle);
        alert(res);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const inputs = [
    {
      id: "new-title",
      value: newTitle,
      setter: setNewTitle,
      placeholder: selectedArticleData?.title,
      label: <label htmlFor="new-title">Novo Título do Artigo</label>,
    },
    {
      id: "new-author",
      value: newAuthor,
      setter: setNewAuthor,
      placeholder: selectedArticleData?.author,
      label: <label htmlFor="new-author">Alterar Autor do Artigo</label>,
    },
  ];

  return (
    <S.Form>
      <h3>Editor de Artigos</h3>
      <DisciplineSelector {...{ disciplinesNames, selectedDiscipline, setSelectedDiscipline }} />
      <ArticleSelector {...{ articleList, isArticlesListLoading, selectedArticle, setSelectedArticle }} />
      <S.InputAndLabelContainer>
        {inputs.map((item) => (
          <S.InputAndLabelDiv key={item.id}>
            {item.label}
            <S.Input
              id={item.id}
              value={item.value}
              onChange={(e) => item.setter(e.target.value)}
              placeholder={item.placeholder}
              disabled={!selectedArticle}
            />
          </S.InputAndLabelDiv>
        ))}
      </S.InputAndLabelContainer>
      <TextEditor
        textValue={newContent}
        setTextValue={setNewContent}
        defaultValue={selectedArticleData?.content ?? ""}
      />
      <S.ButtonContainer>
        <S.Button disabled={!newAuthor || !newTitle} onClick={(e) => saveData(e)}>
          {isLoading ? <Spinner /> : "Salvar Alterações"}
        </S.Button>
      </S.ButtonContainer>
    </S.Form>
  );
}
