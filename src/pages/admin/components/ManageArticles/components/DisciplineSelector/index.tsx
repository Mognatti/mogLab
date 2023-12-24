interface DisciplineSelectorProps {
  selectedDiscipline: string;
  setSelectedDiscipline: React.Dispatch<React.SetStateAction<string>>;
  disciplinesNames: string[];
}

export default function DisciplineSelector({
  selectedDiscipline,
  setSelectedDiscipline,
  disciplinesNames,
}: Readonly<DisciplineSelectorProps>) {
  return (
    <select
      id="discipline"
      value={selectedDiscipline}
      onChange={(e) => setSelectedDiscipline(e.target.value)}
    >
      <option value={""}>Selecione uma disciplina</option>
      {disciplinesNames.map((discipline) => (
        <option key={discipline} value={discipline}>
          {discipline}
        </option>
      ))}
    </select>
  );
}
