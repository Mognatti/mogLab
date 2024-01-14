import capitalizeWords from "../../../../../functions/capitalizeWords";
import { DisciplineNameAndId } from "../../../../../types/globalTypes";
import * as S from "../styles";

interface DeleteDisciplinesProps {
  setDeleteId: React.Dispatch<React.SetStateAction<string>>;
  deleteId: string;
  setConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  disciplinesNames: DisciplineNameAndId[];
}

export default function DeleteDiscipline({
  deleteId,
  setConfirmDeleteModal,
  setDeleteId,
  disciplinesNames,
}: DeleteDisciplinesProps) {
  return (
    <S.Form>
      <h4>Deletar Disciplina</h4>
      <S.Select onChange={(e) => setDeleteId(e.target.value)}>
        <option value="">Selecione uma disciplina</option>
        {disciplinesNames.map((item) => (
          <option key={item.id} value={item.id}>
            {capitalizeWords(item.title)}
          </option>
        ))}
      </S.Select>
      <S.Button
        disabled={!deleteId}
        onClick={() => (deleteId ? setConfirmDeleteModal(true) : alert("Selecione uma disciplina para excluir"))}
        type="button"
      >
        Deletar Disciplina
      </S.Button>
    </S.Form>
  );
}
