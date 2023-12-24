import * as S from "./styles";
import Dashboard from "./components/Dashboard";
import { useContext, useEffect } from "react";
import { CurrentUser } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const { user } = useContext(CurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
  }, [user, navigate]);

  return (
    <S.DivContainer>
      <Dashboard />
    </S.DivContainer>
  );
}
