import { useEffect, useState } from "react";
import { DisciplineNameAndId } from "../types/globalTypes";

export default function useFetchDisciplinesNames() {
  const [disciplinesNames, setDisciplinesNames] = useState<DisciplineNameAndId[]>([]);
  const [isDisciplinesNamesLoading, setIsDisciplinesNamesLoading] = useState<boolean>(false);
  const disciplinesNamesURL = `${import.meta.env.VITE_API_BASE_URL}/disciplines/names`;

  useEffect(() => {
    async function fetchDisciplinesNames() {
      setIsDisciplinesNamesLoading(true);
      try {
        const res = await fetch(`${disciplinesNamesURL}`);
        const data = await res.json();
        if (data) {
          setDisciplinesNames(data);
          setIsDisciplinesNamesLoading(false);
        } else {
          console.log("dados não encontrados");
        }
      } catch (error) {
        console.log(error);
        setIsDisciplinesNamesLoading(false);
      }
    }
    if (disciplinesNames.length <= 0) {
      fetchDisciplinesNames();
    }
  }, [disciplinesNamesURL]);

  return [{ disciplinesNames, isDisciplinesNamesLoading }];
}
