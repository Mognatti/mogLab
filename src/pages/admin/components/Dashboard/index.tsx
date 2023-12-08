import { useContext } from "react";
import * as S from "./styles";
import { CurrentUser } from "../../../../context/authContext";

export default function Dashboard() {
  const { user } = useContext(CurrentUser);
  return (
    <>
      <h2>Bem vindo, {user?.email}!</h2>
      <S.Grid></S.Grid>
    </>
  );
}
