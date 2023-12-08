import { useState } from "react";

export default function usePostNewDiscipline() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  async function postNewDiscipline(title: string, desc: string) {
    const URL = "https://ill-blue-rooster-veil.cyclic.app/disciplines/";
    if (title === "" || desc === "") {
      return setMessage("Insira um título e uma descrição para a disciplina");
    }
    try {
      setIsLoading(true);
      await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: desc,
        }),
      });
      setMessage(
        `Disciplina cadastrada com sucesso: \n title: ${title} description: ${desc}`
      );
      setIsLoading(false);
    } catch (error) {
      setMessage("Algo deu errado!");
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }
  return [{ isLoading, message, postNewDiscipline }];
}
