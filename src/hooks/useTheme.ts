import { useState, useEffect } from "react";
import { DefaultTheme } from "styled-components";

export default function useTheme(key: string, initialState: DefaultTheme) {
  const [theme, setTheme] = useState<DefaultTheme>(() => {
    const localTheme: string | null = localStorage.getItem(key);

    if (localTheme?.includes("dark")) {
      return JSON.parse(localTheme);
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [{ theme, setTheme }];
}
