import { useEffect, useState } from "react";
import TextEditor from "../components/TextEditor";
import DisciplineSelector from "../components/DisciplineSelector";
import useArticle from "../../../../../hooks/useArticle";
import useFetchArticles from "../../../../../hooks/useFetchArticles";
import { Spinner } from "react-bootstrap";
import * as S from "../components/sharedStyles";
import { DisciplineNameAndId } from "../../../../../types/globalTypes";
import ArticleSelector from "../components/ArticleSelector";
import capitalizeWords from "../../../../../functions/capitalizeWords";

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
  const [isChangingName, setIsChangingName] = useState(false);
  const [isChangingAuthor, setIsChangingAuthor] = useState(false);

  useEffect(() => {
    async function updateArticles() {
      if (selectedDiscipline) {
        await fetchArticles(selectedDiscipline);
        setIsChangingAuthor(false);
        setIsChangingName(false);
      }
    }
    updateArticles();

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

  function updateValue(
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    id: string
  ) {
    if (id === "new-title") {
      setIsChangingName(true);
    } else {
      setIsChangingAuthor(true);
    }
    setter(e.target.value);
  }
  const inputs = [
    {
      id: "new-title",
      value: isChangingName ? newTitle : selectedArticleData && capitalizeWords(selectedArticleData.title),
      setter: setNewTitle,
      placeholder: selectedArticleData && capitalizeWords(selectedArticleData.title),
      // stopped using label for better UX
      label: <span>Novo Título do Artigo</span>,
    },
    {
      id: "new-author",
      value: isChangingAuthor ? newAuthor : selectedArticleData?.author,
      setter: setNewAuthor,
      placeholder: selectedArticleData?.author,
      // stopped using label for better UX
      label: <span>Alterar Autor do Artigo</span>,
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
              onChange={(e) => updateValue(e, item.setter, item.id)}
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
