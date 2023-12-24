import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  e: React.MouseEvent<HTMLButtonElement>;
  email: string;
  password: string;
}

export default function useLogin() {
  const [isLoading, setIsLoading] = useState<boolean>();
  const missingEmailMessage = "Insira um e-mail válido";
  const missingPasswordMessage = "Insira a sua senha";
  const navigate = useNavigate();

  async function login({ e, email, password }: LoginProps) {
    e.preventDefault();
    const errorDiv = document.getElementById("error-message");
    const resetMessage = setTimeout(() => {
      errorDiv!.innerHTML = "";
    }, 2000);
    if (!email) {
      errorDiv!.innerHTML = `<p>${missingEmailMessage}</p>`;
      return resetMessage;
    } else if (!password) {
      errorDiv!.innerHTML = `<p>${missingPasswordMessage}</p>`;
      return resetMessage;
    }

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoading(false);
      navigate("/admin");
    } catch (error: unknown) {
      alert(error);
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      setIsLoading(true);
      await auth.signOut();
      setIsLoading(false);
      navigate("/login");
      window.location.reload(); // failsafe for navigate
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  return [{ isLoading, login, logout }];
}
