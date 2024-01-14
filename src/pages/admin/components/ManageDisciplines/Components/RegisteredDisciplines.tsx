import { DisciplineNameAndId } from "../../../../../types/globalTypes";
import { Spinner } from "react-bootstrap";
import * as S from "../styles";
import capitalizeWords from "../../../../../functions/capitalizeWords";

interface CreateDisciplineProps {
  isDisciplinesNamesLoading: boolean | undefined;
  disciplinesNames: DisciplineNameAndId[];
}

export default function RegisteredDisciplines({ isDisciplinesNamesLoading, disciplinesNames }: CreateDisciplineProps) {
  return (
    <S.RegisteredDiv>
      <h3>Disciplinas Cadastradas</h3>
      <S.List>
        {isDisciplinesNamesLoading ? (
          <Spinner size="sm" />
        ) : (
          disciplinesNames.map((discipline) => <S.Item key={discipline.id}>{capitalizeWords(discipline.title)}</S.Item>)
        )}
      </S.List>
    </S.RegisteredDiv>
  );
}
