import * as S from "./styles";
import * as GS from "../../styles/global";
import BiologyRoute from "./components/BiologyRoute";
import useFetchDisciplinesNames from "../../hooks/useFetchDisciplinesNames";
import Loader from "./Discipline/Loader";

export default function StudyMainPage() {
  const [{ disciplinesNames, isDisciplinesNamesLoading }] =
    useFetchDisciplinesNames();

  if (isDisciplinesNamesLoading) {
    return <Loader />;
  }

  return (
    <S.MainContainer>
      <S.Title>Disciplinas</S.Title>
      <S.List>
        {disciplinesNames.map((discipline) => (
          <S.Item key={discipline}>
            <GS.StyledLink to={"/disciplinas/" + discipline.toLowerCase()}>
              {discipline}
            </GS.StyledLink>
          </S.Item>
        ))}
      </S.List>
      <hr />
      <BiologyRoute />
    </S.MainContainer>
  );
}
