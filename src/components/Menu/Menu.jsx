import classes from "./Menu.module.css";
import MenuItem from "../MenuItem/MenuItem";

export default function Menu({ restMenu }) {
  return (
    <div className={classes.cards}>
      <div className={classes.inner}>
        {restMenu.map((menu) => (
          <MenuItem key={menu.id} {...menu} />
        ))}
      </div>
    </div>
  );
}
