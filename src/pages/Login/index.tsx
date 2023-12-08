import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../config/firebase";
import { Spinner } from "react-bootstrap";
import { CurrentUser } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import * as GS from "../../styles/global";

interface LoginProps {
  e: React.MouseEvent<HTMLButtonElement>;
  email: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const { user } = useContext(CurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      return navigate("/admin");
    }
  }, [user, navigate]);

  async function login({ e, email, password }: LoginProps) {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        navigate("admin");
        setIsLoading(false);
      } else {
        alert("Usuário não encontrado!");
      }
    } catch (error: unknown) {
      alert(error);
    }
  }

  return (
    <S.Form>
      <label htmlFor="email"> Digite seu email: </label>
      <input
        id="email"
        placeholder="email..."
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password"> Digite sua senha: </label>
      <input
        id="password"
        placeholder="senha..."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <GS.GlobalButton
        type="submit"
        onClick={(e) => login({ e, email, password })}
      >
        {isLoading ? <Spinner /> : "Entrar"}
      </GS.GlobalButton>
    </S.Form>
  );
}
