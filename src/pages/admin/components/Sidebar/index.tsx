import { Outlet, useLocation } from "react-router-dom";
import * as S from "./styles";
import { DefaultTheme } from "styled-components/dist/types";
import ThemeSwitcher from "../../../../components/ThemeSwitcher";

const navLinks = [
  {
    id: 1,
    to: "/admin",
    text: "Home",
    icon: <S.HomeIcon size={22} />,
  },
  {
    id: 2,
    to: "/admin/disciplinas",
    text: "Disciplinas",
    icon: <S.DisciplinesIcon size={22} />,
  },
];

export interface SidebarProps {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export default function Sidebar({ theme, setTheme }: Readonly<SidebarProps>) {
  const path = useLocation();
  return (
    <S.SidebarDiv path={path.pathname}>
      <S.NavList>
        {navLinks.map((link) => (
          <S.NavLink to={link.to} key={link.id}>
            <span>{link.icon} </span>
            <S.LinkText>{link.text}</S.LinkText>
          </S.NavLink>
        ))}
        <S.ThemeSwitcherContainer>
          <ThemeSwitcher {...{ theme, setTheme }} />
        </S.ThemeSwitcherContainer>
      </S.NavList>
      <Outlet />
    </S.SidebarDiv>
  );
}
