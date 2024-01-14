import { useState } from "react";
import { ArticleProps } from "../types/globalTypes";

type responseData = {
  disciplina: string;
  artigos: ArticleProps[];
};

export default function useFetchArticles() {
  const [articleList, setArticleList] = useState<ArticleProps[]>([]);
  const [isArticlesListLoading, setIsArticlesListLoading] = useState<boolean>();

  async function fetchArticles(discipline: string) {
    const URL = `${import.meta.env.VITE_API_BASE_URL}/disciplines/${discipline}/articles`;
    try {
      setIsArticlesListLoading(true);
      const response = await fetch(URL);
      const data: responseData = await response.json();
      setArticleList(data.artigos);
      setIsArticlesListLoading(false);
    } catch (error) {
      console.log(error);
      setIsArticlesListLoading(false);
    }
  }

  return [{ articleList, isArticlesListLoading, fetchArticles }];
}
