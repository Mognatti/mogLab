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
          <div style={{ display: "flex", justifyContent: "center", gridColumnStart: "2" }}>
            <Spinner size="sm" />
          </div>
        ) : (
          disciplinesNames.map((discipline) => (
            <S.Item key={discipline.id}>
              <p>{capitalizeWords(discipline.title)}</p>
            </S.Item>
          ))
        )}
      </S.List>
    </S.RegisteredDiv>
  );
}
