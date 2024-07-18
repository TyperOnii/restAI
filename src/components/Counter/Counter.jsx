import Button from "../Button/Button";
import classes from "./Counter.module.css";

export default function Counter({ value, increment, decrement }) {
  return (
    <div className={classes.counterItem}>
      <div className={classes.inner}>
        <span className={classes.counter}>{value}</span>
        <div className={classes.actions}>
          <Button onClick={decrement} styles="counter">
            -
          </Button>
          <Button onClick={increment} styles="counter">
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
