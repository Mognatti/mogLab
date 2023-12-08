import { useEffect, useState } from "react";

export default function useFetchDisciplinesNames() {
  const [disciplinesNames, setDisciplinesNames] = useState<string[]>([]);
  const [isDisciplinesNamesLoading, setIsDisciplinesNamesLoading] =
    useState<boolean>();
  const disciplinesNamesURL =
    "https://ill-blue-rooster-veil.cyclic.app/disciplines/names";

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
    fetchDisciplinesNames();
  }, []);

  return [{ disciplinesNames, isDisciplinesNamesLoading }];
}
