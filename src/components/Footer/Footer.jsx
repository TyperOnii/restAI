import classes from "./Footer.module.css";
import { AiFillAliwangwang } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={[classes.inner, "container"].join(" ")}>
        <AiFillAliwangwang className={classes.logo} />
        <h2 className={classes.title}>restAI</h2>
      </div>
    </footer>
  );
}
