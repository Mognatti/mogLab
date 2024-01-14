import { useState } from "react";

export default function usePostNewDiscipline() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function postNewDiscipline(title: string, desc: string) {
    const URL = `${import.meta.env.VITE_API_BASE_URL}/disciplines/`;
    if (title === "" || desc === "") {
      return setErrorMessage("Insira um título e uma descrição para a disciplina");
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
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }
  return [{ isLoading, errorMessage, postNewDiscipline }];
}
