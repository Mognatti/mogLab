import { Outlet, useLocation } from "react-router-dom";
import { navLinks } from "./navLinks";
import * as S from "./styles";
import { DefaultTheme } from "styled-components/dist/types";
import useWindowScroll from "../../hooks/useWindowScroll";
import ThemeSwitcher from "../ThemeSwitcher";
import { useContext } from "react";
import { CurrentUser } from "../../context/authContext";

interface HeaderProps {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export default function Header({ theme, setTheme }: Readonly<HeaderProps>) {
  const [{ Ypos }] = useWindowScroll();
  const { user } = useContext(CurrentUser);
  const path = useLocation();

  return (
    <>
      <S.PageHeader scrolling={Ypos > 0} path={path.pathname}>
        <S.Title scrolling={Ypos > 0}>MogLab</S.Title>
        <S.Nav>
          <S.List>
            {navLinks.map((link) => (
              <S.NavLink key={link.id} to={link.to} scrolling={Ypos > 0}>
                {link.name}
              </S.NavLink>
            ))}
            <S.NavLink to="/login" scrolling={Ypos > 0}>
              {user ? "Dashboard" : "Login"}
            </S.NavLink>
            <ThemeSwitcher {...{ theme, setTheme }} />
          </S.List>
        </S.Nav>
      </S.PageHeader>
      <Outlet />
    </>
  );
}
