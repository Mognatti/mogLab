import { useContext } from "react";
import { CurrentUser } from "../../context/authContext";
import { Navigate, Route } from "react-router-dom";

interface AuthProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthProps> = ({ children, ...rest }) => {
  const { user } = useContext(CurrentUser);

  return (
    <Route
      {...rest}
      element={user !== null ? <Navigate to="/login" /> : children}
    />
  );
};

export default AuthRoute;
