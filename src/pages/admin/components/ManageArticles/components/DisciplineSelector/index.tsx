import { DisciplineNameAndId } from "../../../../../../types/globalTypes";

interface DisciplineSelectorProps {
  selectedDiscipline: string;
  setSelectedDiscipline: React.Dispatch<React.SetStateAction<string>>;
  disciplinesNames: DisciplineNameAndId[];
}

export default function DisciplineSelector({
  selectedDiscipline,
  setSelectedDiscipline,
  disciplinesNames,
}: Readonly<DisciplineSelectorProps>) {
  return (
    <select id="discipline" value={selectedDiscipline} onChange={(e) => setSelectedDiscipline(e.target.value)}>
      <option value={""}>Selecione uma disciplina</option>
      {disciplinesNames.map((discipline) => (
        <option key={discipline.id} value={discipline.title}>
          {discipline.title}
        </option>
      ))}
    </select>
  );
}
