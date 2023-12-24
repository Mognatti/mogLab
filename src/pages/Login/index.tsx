import { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { CurrentUser } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import useLogin from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [{ isLoading, login }] = useLogin();
  const { user } = useContext(CurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate("/admin");
    }
  }, [user, navigate]);

  return (
    <S.Container>
      <S.Form>
        <span>O login é somente para criadores de artigos!</span>
        <hr />
        <label htmlFor="email"> Digite seu email: </label>
        <S.Input
          id="email"
          placeholder="email@email.com"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password"> Digite sua senha: </label>
        <S.Input
          id="password"
          placeholder="Senha..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <S.ErrorMessageDiv id="error-message"></S.ErrorMessageDiv>
        <S.Button type="submit" onClick={(e) => login({ e, email, password })} disabled={!email || !password}>
          {isLoading ? <Spinner /> : "Entrar"}
        </S.Button>
      </S.Form>
      <S.ContentContainer>
        <S.AuthImage src="/img/login_img.svg" />
      </S.ContentContainer>
    </S.Container>
  );
}
