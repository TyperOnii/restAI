import classNames from "classnames";
import classes from "./Footer.module.css";
import { AiFillAliwangwang } from "react-icons/ai";
import { DARK_THEME } from "../ThemeContextProvider/Context";

export default function Footer({ theme }) {
  return (
    <footer
      className={classNames(classes.footer, {
        [classes.footerDark]: theme === DARK_THEME,
      })}
    >
      <div className={[classes.inner, "container"].join(" ")}>
        <AiFillAliwangwang className={classes.logo} />
        <h2 className={classes.title}>restAI</h2>
      </div>
    </footer>
  );
}
