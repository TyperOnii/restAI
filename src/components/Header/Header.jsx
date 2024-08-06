import classes from "./Header.module.css";
import { AiFillAliwangwang } from "react-icons/ai";
import ThemeButton from "../Button/ThemeButton";
import classNames from "classnames";
import { DARK_THEME } from "../ThemeContextProvider/Context";
import LoginButton from "../Button/LoginButton";
import { useLogin } from "../AuthorizationContextProvider/Hook";

export default function Header({ theme }) {
  const { loginState } = useLogin();
  return (
    <header
      className={classNames(classes.header, {
        [classes.headerDark]: theme === DARK_THEME,
      })}
    >
      <div className={[classes.inner, "container"].join(" ")}>
        <div className={classes.innerLogo}>
          <AiFillAliwangwang className={classes.logo} />{" "}
          <h2 className={classes.title}>restAI</h2>
        </div>
        {loginState.isLogin && (
          <span>{`wellcome to our service, ${loginState.name}!`}</span>
        )}
        <div className={classes.actions}>
          <LoginButton />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
