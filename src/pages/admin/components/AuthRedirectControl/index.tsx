import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../../Loader";
import { User } from "firebase/auth";

interface AuthRedirectControlProps {
  user: User | null;
  args?: boolean[];
}

export default function AuthRedirectControl({ user, args }: AuthRedirectControlProps) {
  const navigate = useNavigate();

  useEffect(() => {
    let checkForUserTimeout: NodeJS.Timeout;

    if (!user) {
      checkForUserTimeout = setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
    return () => {
      clearTimeout(checkForUserTimeout);
    };
  }, [user, navigate]);

  if (!user || args?.some((arg) => arg === true)) {
    return <Loader />;
  }
}
