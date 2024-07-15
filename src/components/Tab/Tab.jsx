import Button from "../Button/Button";
import classes from "./Tab.module.css";

// export default function Tab({ obj, changeTabHandler, text }) {
//   return <Button onClick={() => changeTabHandler(obj)}>{text}</Button>;
// }

export default function Tab({ changeTabHandler, id, text }) {
  return <Button onClick={() => changeTabHandler(id)}>{text}</Button>;
}
