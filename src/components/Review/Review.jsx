import classes from "./Review.module.css";
import UserReceiver from "../User/UserReceiver";
export default function Review({ userId, text, rating }) {
  return (
    <article className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.userInfo}>
          <UserReceiver id={userId} />
          <p className={classes.comment}>{text}</p>
        </div>
        <span className={classes.rating}>{rating}</span>
      </div>
    </article>
  );
}
