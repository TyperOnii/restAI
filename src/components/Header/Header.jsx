import classes from "./Header.module.css";
import { AiFillAliwangwang } from "react-icons/ai";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={[classes.inner, "container"].join(" ")}>
        <AiFillAliwangwang className={classes.logo} />
        <h2 className={classes.title}>restAI</h2>
      </div>
    </header>
  );
}
