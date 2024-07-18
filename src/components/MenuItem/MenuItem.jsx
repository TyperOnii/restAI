import ContainerCounter from "../Counter/ContainerCounter";
import classes from "./MenuItem.module.css";

export default function MenuItem({ name, price, ingredients }) {
  return (
    <article className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.info}>
          <h3 className={classes.title}>"{name}"</h3>
          <span className={classes.price}>price: {price}</span>
          <div className={classes.ingredients}>
            ingredients: {ingredients.join(", ")}
          </div>
        </div>
        <div className={classes.buy}>
          <ContainerCounter min={0} max={5} step={1} />
        </div>
      </div>
    </article>
  );
}
