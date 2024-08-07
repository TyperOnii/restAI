import Button from "../Button/Button";
import classes from "./Tab.module.css";

export default function Tab({ text, onClick, id }) {
  return <Button onClick={() => onClick(id)}>{text}</Button>;
}
