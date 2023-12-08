import { createContext, useState, ReactNode, useMemo } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

interface CurrentUserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface CurrentUserProviderProps {
  children: ReactNode;
}

export const CurrentUser = createContext<CurrentUserContextProps>({
  user: auth.currentUser,
  setUser: () => {},
});

export const CurrentUserProvider: React.FC<CurrentUserProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  onAuthStateChanged(auth, (user) => setUser(user));

  const contextValue: CurrentUserContextProps = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user, setUser]);

  return (
    <CurrentUser.Provider value={contextValue}>{children}</CurrentUser.Provider>
  );
};
