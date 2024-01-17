import { useState } from "react";
import { ArticleProps } from "../types/globalTypes";

export default function useArticle() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function postNewArticle(discipline: string, article: ArticleProps) {
    const URL = `${import.meta.env.VITE_API_BASE_URL}/disciplines/${discipline}/articles`;
    if (!article.author || !article.content || !article.title || !discipline) {
      return alert("Todos os campos devem estar preenchidos!");
    }

    try {
      setIsLoading(true);
      await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: article.title,
          content: article.content,
          author: article.author,
        }),
      });

      setIsLoading(false);
      return `Artigo cadastrado com sucesso!`;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return "Algo deu errado e o artigo não foi cadastrado!";
    } finally {
      setIsLoading(false);
    }
  }

  async function updateArticle(discipline: string, article: ArticleProps) {
    const URL = `${import.meta.env.VITE_API_BASE_URL}/disciplines/${discipline}/articles`;
    if (!article.author || !article.content || !article.title || !discipline) {
      return alert("Todos os campos devem estar preenchidos!");
    }

    try {
      setIsLoading(true);
      await fetch(URL, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: article.title,
          content: article.content,
          author: article.author,
          id: article.id,
        }),
      });
      setIsLoading(false);
      return `Artigo Atualizado com sucesso!`;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return "Algo deu errado e o artigo não foi atualizado!";
    } finally {
      setIsLoading(false);
      setTimeout(() => {}, 5000);
    }
  }

  async function deleteArticle(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    discipline: string,
    articleId: string
  ) {
    e.preventDefault();
    const URL = `${import.meta.env.VITE_API_BASE_URL}/disciplines/${discipline}/articles/${articleId}`;
    try {
      setIsLoading(true);
      const res = await fetch(URL, {
        method: "DELETE",
      });
      if (res.ok) {
        setIsLoading(false);
        alert("Artigo deletado com sucesso!");
        window.location.reload();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      alert("Algo deu errado ao deletar a disciplina!");
    }
  }
  return [{ isLoading, postNewArticle, updateArticle, deleteArticle }];
}
