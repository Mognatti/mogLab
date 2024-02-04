import { Outlet } from "react-router-dom";
import { navLinks } from "./navLinks";
import * as S from "./styles";
import { DefaultTheme } from "styled-components/dist/types";
import useWindowScroll from "../../hooks/useWindowScroll";
import ThemeSwitcher from "../ThemeSwitcher";
import { useContext, useState } from "react";
import { CurrentUser } from "../../context/authContext";
import BreadCrumbs from "../BreadCrumbs";
import useWindowSize from "../../hooks/useWindowSize";

interface HeaderProps {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}
const showHamburguerWidth = 750;
export default function Header({ theme, setTheme }: Readonly<HeaderProps>) {
  const [{ Ypos }] = useWindowScroll();
  const [{ windowWidth }] = useWindowSize();
  const { user } = useContext(CurrentUser);
  const [showHamburguerList, setShowHamburguerList] = useState(false);
  const showHamburguer = windowWidth <= showHamburguerWidth;

  return (
    <>
      {showHamburguer ? (
        <S.PageHeader scrolling={Ypos > 0}>
          <S.Title scrolling={Ypos > 0}>MogLab</S.Title>
          <S.HamburgerMenu size="25" onClick={() => setShowHamburguerList((prev) => !prev)} scrolling={Ypos > 0} />
          <S.HamburguerList show={showHamburguerList}>
            {navLinks.map((link) => (
              <S.HamburguerNavLink
                key={link.id}
                to={link.to}
                show={showHamburguerList}
                onClick={() => setShowHamburguerList(false)}
              >
                {link.name}
              </S.HamburguerNavLink>
            ))}
            <S.HamburguerNavLink to="/login" show={showHamburguerList} onClick={() => setShowHamburguerList(false)}>
              {user ? "Dashboard" : "Login"}
            </S.HamburguerNavLink>
          </S.HamburguerList>
          <ThemeSwitcher {...{ theme, setTheme }} />
        </S.PageHeader>
      ) : (
        <S.PageHeader scrolling={Ypos > 0}>
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
            </S.List>
          </S.Nav>
          <ThemeSwitcher {...{ theme, setTheme }} />
        </S.PageHeader>
      )}
      <BreadCrumbs />
      <Outlet />
    </>
  );
}
