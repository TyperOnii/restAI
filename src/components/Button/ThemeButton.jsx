import { LIGHT_THEME } from "../ThemeContextProvider/Context";
import { useTheme } from "../ThemeContextProvider/Hook";
import Button from "./Button";

export default function ThemeButton() {
  const { theme, themeSwitcher } = useTheme();
  return (
    <Button theme={theme} onClick={themeSwitcher}>
      {theme === LIGHT_THEME ? "switch to dark" : "switch to light"}
    </Button>
  );
}
