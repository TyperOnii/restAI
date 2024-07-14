import Button from "../Button/Button";
import classes from "./Tab.module.css";

export default function Tab({ rest, changeTabHandler }) {
  return <Button onClick={() => changeTabHandler(rest)}>{rest.name}</Button>;
}
