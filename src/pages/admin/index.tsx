import * as S from "./styles";
import Dashboard from "./components/Dashboard";
import { useContext } from "react";
import { CurrentUser } from "../../context/authContext";
import AuthRedirectControl from "./components/AuthRedirectControl";

export default function Admin() {
  const { user } = useContext(CurrentUser);

  if (!user) {
    return <AuthRedirectControl user={user} />;
  }

  return (
    <S.DivContainer>
      <Dashboard />
    </S.DivContainer>
  );
}
