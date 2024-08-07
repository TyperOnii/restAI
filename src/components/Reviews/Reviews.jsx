import classes from "./Reviews.module.css";
import ReviewReceiver from "../Review/ReviewReceiver";

export default function Reviews({ ids }) {
  return (
    <div className={classes.cards}>
      <div className={classes.inner}>
        {ids.map((id) => (
          <ReviewReceiver key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
