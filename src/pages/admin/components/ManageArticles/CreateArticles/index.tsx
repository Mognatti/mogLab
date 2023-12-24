import { useState } from "react";
import * as S from "../components/sharedStyles";
import useArticle from "../../../../../hooks/useArticle";
import { Spinner } from "react-bootstrap";
import TextEditor from "../components/TextEditor";
import DisciplineSelector from "../components/DisciplineSelector";

interface CreateArticlesProps {
  disciplinesNames: string[];
}

type handleSubmitProps = {
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  title: string;
  content: string;
  author: string;
};

export default function CreateArticles({ disciplinesNames }: Readonly<CreateArticlesProps>) {
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articleAuthor, setArticleAuthor] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("<p></p>");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");
  const [{ isLoading, postNewArticle, responseMessage }] = useArticle();

  const inputs = [
    {
      id: "article-title",
      type: "text",
      placeholder: "Introdução à Disciplina...",
      value: articleTitle,
      setter: setArticleTitle,
      label: <label htmlFor="article-title">Título do artigo</label>,
    },
    {
      id: "article-author",
      type: "text",
      placeholder: "Fulano de tal...",
      value: articleAuthor,
      setter: setArticleAuthor,
      label: <label htmlFor="article-author">Autor do artigo</label>,
    },
  ];

  async function handleSubmit({ e, title, content, author }: handleSubmitProps) {
    e.preventDefault();
    const article = {
      title: title,
      content: content,
      author: author,
    };
    try {
      await postNewArticle(selectedDiscipline, article);
      setArticleAuthor("");
      setTextValue("<p></p>");
      setArticleTitle("");
    } catch (error) {
      console.log(error);
      alert("algo deu errado");
    }
  }

  return (
    <S.Form>
      <h3>Criador de Artigos</h3>
      <DisciplineSelector {...{ selectedDiscipline, setSelectedDiscipline, disciplinesNames }} />
      <S.InputAndLabelContainer>
        {inputs.map((input) => (
          <S.InputAndLabelDiv key={input.id}>
            {input.label}
            <S.Input
              id={input.id}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => input.setter(e.target.value)}
              disabled={!selectedDiscipline}
            />
          </S.InputAndLabelDiv>
        ))}
      </S.InputAndLabelContainer>
      <TextEditor {...{ textValue, setTextValue }} />
      <S.ButtonContainer>
        <S.Button
          type="submit"
          onClick={(e) =>
            handleSubmit({
              e,
              title: articleTitle,
              content: textValue,
              author: articleAuthor,
            })
          }
        >
          {isLoading ? <Spinner /> : "Enviar"}
        </S.Button>
      </S.ButtonContainer>
      {responseMessage && <span style={{ textAlign: "center" }}>{responseMessage}</span>}
    </S.Form>
  );
}
