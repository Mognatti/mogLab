import { Spinner } from "react-bootstrap";
import capitalizeWords from "../../../../../../functions/capitalizeWords";
import { ArticleProps } from "../../../../../../types/globalTypes";

interface DisciplineSelectorProps {
  selectedArticle: string;
  setSelectedArticle: React.Dispatch<React.SetStateAction<string>>;
  articleList: ArticleProps[];
  isArticlesListLoading: boolean | undefined;
}

export default function ArticleSelector({
  setSelectedArticle,
  articleList,
  isArticlesListLoading,
  selectedArticle,
}: Readonly<DisciplineSelectorProps>) {
  return isArticlesListLoading ? (
    <Spinner size="sm" />
  ) : (
    <select id="discipline" value={selectedArticle} onChange={(e) => setSelectedArticle(e.target.value)}>
      <option value={""}>Selecione uma artigo</option>
      {articleList.map((article) => (
        <option key={article.id} value={article.id}>
          {capitalizeWords(article.title)}
        </option>
      ))}
    </select>
  );
}
