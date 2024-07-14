import { Children } from "react";
import Header from "../Header/Header";
import classes from "./Layout.module.css";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
}
