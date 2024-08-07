import classes from "./Menu.module.css";
import MenuItemReceiver from "../MenuItem/MenuItemReceiver";

export default function Menu({ ids }) {
  return (
    <div className={classes.cards}>
      <div className={classes.inner}>
        {ids.map((id) => (
          <MenuItemReceiver key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
