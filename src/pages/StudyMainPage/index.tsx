import * as S from "./styles";
import * as GS from "../../styles/global";
import useFetchDisciplinesNames from "../../hooks/useFetchDisciplinesNames";
import Loader from "../Loader";
import capitalizeWords from "../../functions/capitalizeWords";

export default function StudyMainPage() {
  const [{ disciplinesNames, isDisciplinesNamesLoading }] = useFetchDisciplinesNames();
  const sortedDisciplines = [...disciplinesNames].sort((a, b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  });
  if (isDisciplinesNamesLoading) {
    return <Loader />;
  }

  return (
    <S.MainContainer>
      <S.Title>Disciplinas</S.Title>
      <S.List>
        {sortedDisciplines.map((discipline) => (
          <S.Item key={discipline.id}>
            <GS.StyledLink to={"/disciplinas/" + discipline.title.toLowerCase()}>
              <S.LinkContainer>
                <S.DisciplineIcon />
                {capitalizeWords(discipline.title)}
              </S.LinkContainer>
            </GS.StyledLink>
          </S.Item>
        ))}
      </S.List>
      <hr />
      <S.WIPContainer>
        <S.Disclaimer>
          Este site é um projeto em desenvolvimento. Novas disciplinas e conteúdos serão adicionados com o tempo, de
          forma a atender as demandas da grade curricular dos cursos da saúde, com ênfase na biomedicina.
        </S.Disclaimer>
        <S.CogContainer>
          <S.CogIcon size="80" />
          <S.SecondCogIcon size="60" />
        </S.CogContainer>
      </S.WIPContainer>
      {/* <BiologyRoute />  still WIP*/}
    </S.MainContainer>
  );
}
