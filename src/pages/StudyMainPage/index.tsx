import * as S from "./styles";
import * as GS from "../../styles/global";
import BiologyRoute from "./components/BiologyRoute";
import useFetchDisciplinesNames from "../../hooks/useFetchDisciplinesNames";
import Loader from "./Discipline/Loader";
import capitalizeWords from "../../functions/capitalizeWords";
import { SiBookstack } from "react-icons/si";

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
                <SiBookstack />
                {capitalizeWords(discipline.title)}
              </S.LinkContainer>
            </GS.StyledLink>
          </S.Item>
        ))}
      </S.List>
      <hr />
      <BiologyRoute />
    </S.MainContainer>
  );
}
