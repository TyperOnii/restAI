import { useState } from "react";
import Button from "../Button/Button";
import classes from "./Counter.module.css";

export default function Counter({}) {
  const [value, setValue] = useState(0);
  const decrement = () => {
    value > 0 ? setValue(value - 1) : undefined;
  };
  const encrement = () => {
    value < 5 ? setValue(value + 1) : undefined;
  };
  return (
    <div className={classes.counterItem}>
      <div className={classes.inner}>
        <span className={classes.counter}>{value}</span>
        <div className={classes.actions}>
          <Button onClick={decrement} styles="counter">
            -
          </Button>
          <Button onClick={encrement} styles="counter">
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
