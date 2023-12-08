import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import * as S from "./styles";

interface CreateArticlesProps {
  disciplinesNames: string[];
}

export default function CreateArticles({
  disciplinesNames,
}: Readonly<CreateArticlesProps>) {
  const [articleAuthor, setArticleAuthor] = useState<string>("");
  const [articleTitle, setArticleTitle] = useState<string>("");
  const [articleContent, setArticleContent] = useState<string>("");
  const [textValue, setTextValue] = useState<string>("<p></p>");
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>("");

  console.log(articleContent);

  return (
    <S.Form>
      <h3>Criador de Artigos</h3>
      <select
        id="discipline"
        value={selectedDiscipline}
        onChange={(e) => setSelectedDiscipline(e.target.value)}
      >
        <option value={""}>Selecione uma disciplina</option>
        {disciplinesNames.map((discipline) => (
          <option key={discipline} value={discipline}>
            {discipline}
          </option>
        ))}
      </select>
      <S.InputContainer>
        <S.InputAndLabelDiv>
          <label htmlFor="article-title">Título do artigo</label>
          <input
            type="text"
            id="article-title"
            placeholder="Título do artigo..."
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
          />
        </S.InputAndLabelDiv>
        <S.InputAndLabelDiv className="article-author-div">
          <label htmlFor="article-author">Autor do artigo</label>
          <input
            type="text"
            id="article-author"
            placeholder="Autor do artigo..."
            value={articleAuthor}
            onChange={(e) => setArticleAuthor(e.target.value)}
          />
        </S.InputAndLabelDiv>
      </S.InputContainer>
      <Editor
        apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
        onEditorChange={(newValue, editor) => {
          setTextValue(newValue);
          setArticleContent(editor.getContent({ format: "text" }));
        }}
        initialValue="Conteúdo do artigo..."
        value={textValue}
        init={{
          plugins:
            " mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat",

          spellchecker_language: "pt_BR",
        }}
      />
    </S.Form>
  );
}
