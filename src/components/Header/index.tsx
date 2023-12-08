import { Outlet } from "react-router-dom";
import { navLinks } from "./navLinks";
import * as S from "./styles";
import { DefaultTheme } from "styled-components/dist/types";
import useWindowScroll from "../../hooks/useWindowScroll";
import ThemeSwitcher from "../ThemeSwitcher";

interface HeaderProps {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export default function Header({ theme, setTheme }: Readonly<HeaderProps>) {
  const [{ Ypos }] = useWindowScroll();

  return (
    <>
      <S.PageHeader scrolling={Ypos > 0}>
        <S.Title scrolling={Ypos > 0}>MogLab</S.Title>
        <S.Nav>
          <S.List>
            {navLinks.map((link) => (
              <S.NavLink key={link.id} to={link.to} scrolling={Ypos > 0}>
                {link.name}
              </S.NavLink>
            ))}
            <ThemeSwitcher {...{ theme, setTheme }} />
          </S.List>
        </S.Nav>
      </S.PageHeader>
      <Outlet />
    </>
  );
}
