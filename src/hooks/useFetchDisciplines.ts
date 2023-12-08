import { useEffect, useState } from "react";
import { Disciplines } from "../types/globalTypes";

export default function useFetchDisciplines() {
  const [disciplines, setDisciplines] = useState<Disciplines[]>([]);
  const [isDisciplinesLoading, setIsDisciplinesLoading] = useState(false);
  const disciplinesURL = "https://ill-blue-rooster-veil.cyclic.app/disciplines";

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
  }, []);

  return [{ disciplines, isDisciplinesLoading }];
}
