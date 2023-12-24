import { useState } from "react";
import { ArticleProps } from "../types/globalTypes";

export default function useArticle() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");

  async function postNewArticle(discipline: string, article: ArticleProps) {
    const URL = `https://ill-blue-rooster-veil.cyclic.app/disciplines/${discipline}/articles`;
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
      setResponseMessage(`Artigo cadastrado com sucesso!`);
      setIsLoading(false);
    } catch (error) {
      setResponseMessage("Algo deu errado e o artigo não foi cadastrado!");
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setResponseMessage("");
      }, 5000);
    }
  }

  async function updateArticle(discipline: string, article: ArticleProps) {
    const URL = `https://ill-blue-rooster-veil.cyclic.app/disciplines/${discipline}/articles`;
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
      setResponseMessage(`Artigo Atualizado com sucesso!`);
      setIsLoading(false);
    } catch (error) {
      setResponseMessage("Algo deu errado e o artigo não foi atualizado!");
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setResponseMessage("");
      }, 5000);
    }
  }
  return [{ isLoading, responseMessage, postNewArticle, updateArticle }];
}
