import { DefaultTheme } from "styled-components/dist/types";
import { useState } from "react";
import * as S from "./styles";
import { DarkTheme, lightTheme } from "../../styles/theme";

interface ThemeSwitcherProps {
  theme: DefaultTheme;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}

export default function ThemeSwitcher({
  theme,
  setTheme,
}: Readonly<ThemeSwitcherProps>) {
  const [clicked, setClicked] = useState(theme.title === "light");

  function handleChange() {
    setTheme(theme === lightTheme ? DarkTheme : lightTheme);
    setClicked(theme !== lightTheme);
  }

  return (
    <S.ThemeDiv>
      <S.ThemeSwitch
        onChange={() => handleChange()}
        checked={theme.title === "light"}
      ></S.ThemeSwitch>
      <S.IconRotationDiv clicked={clicked}>
        <S.SunIcon size="20" show={theme.title} />
        <S.MoonIcon size="20" show={theme.title} />
      </S.IconRotationDiv>
    </S.ThemeDiv>
  );
}
