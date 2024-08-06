import { DARK_THEME, LIGHT_THEME, ThemeContext } from "./Context";
import { useCallback, useState } from "react";

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(LIGHT_THEME);

  const themeSwitcher = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    );
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, themeSwitcher }}>
      {children}
    </ThemeContext.Provider>
  );
}
