import { useEffect, useState } from "react";
import { DisciplinesProps } from "../types/globalTypes";

export default function useFetchDisciplines() {
  const [disciplines, setDisciplines] = useState<DisciplinesProps[]>([]);
  const [isDisciplinesLoading, setIsDisciplinesLoading] = useState(false);
  const disciplinesURL = `${import.meta.env.VITE_API_BASE_URL}/disciplines`;

  useEffect(() => {
    async function fetchDisciplines() {
      setIsDisciplinesLoading(true);
      try {
        const response = await fetch(disciplinesURL);
        const data = await response.json();
        setDisciplines(data);
        setIsDisciplinesLoading(false);
      } catch (error) {
        console.log(error);
        setIsDisciplinesLoading(false);
      }
    }
    fetchDisciplines();
  }, [disciplinesURL]);

  async function deleteDiscipline(id: string) {
    try {
      setIsDisciplinesLoading(true);
      const res = await fetch(`${disciplinesURL}/discipline/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id }),
      });
      if (res.ok) {
        setIsDisciplinesLoading(false);
        alert("Disciplina deletada com sucesso!");
        window.location.reload();
      } else {
        alert("Algo deu errado ao deletar a disciplina!");
      }
    } catch (error) {
      setIsDisciplinesLoading(false);
      console.log(error);
    }
  }

  return [{ disciplines, isDisciplinesLoading, deleteDiscipline }];
}
