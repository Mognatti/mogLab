import * as S from "./styles";
import Dashboard from "./components/Dashboard";
import { useContext } from "react";
import { CurrentUser } from "../../context/authContext";

export default function Admin() {
  const { user } = useContext(CurrentUser);
  console.log(user);

  if (!user) {
    return (
      <S.DivContainer>
        <p>Para acessar essa página, faça login como administrador!</p>
      </S.DivContainer>
    );
  }

  return (
    <S.DivContainer>
      <Dashboard />
    </S.DivContainer>
  );
}
