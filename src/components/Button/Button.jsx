import { DARK_THEME } from "../ThemeContextProvider/Context";
import { useTheme } from "../ThemeContextProvider/Hook";
import classes from "./Button.module.css";
import classNames from "classnames";

export default function Button({ children, onClick }) {
  const { theme } = useTheme();
  return (
    <button
      className={classNames(classes.default, {
        [classes.dark]: theme === DARK_THEME,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
