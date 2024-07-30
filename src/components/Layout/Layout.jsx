import { Children } from "react";
import Header from "../Header/Header";
import classes from "./Layout.module.css";
import Footer from "../Footer/Footer";
import { useTheme } from "../ThemeContextProvider/Hook";
import classNames from "classnames";
import { DARK_THEME } from "../ThemeContextProvider/Context";

export default function Layout({ children }) {
  const { theme } = useTheme();
  return (
    <div
      className={classNames(classes.wrapper, {
        [classes.wrapperDark]: theme === DARK_THEME,
      })}
    >
      <Header theme={theme} />
      <main className={classes.main}>{children}</main>
      <Footer theme={theme} />
    </div>
  );
}
