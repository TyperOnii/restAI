import classes from "./Review.module.css";

export default function Review({ user, text, rating }) {
  return (
    <article className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.userInfo}>
          <h2 className={classes.user}>{user}</h2>
          <p className={classes.comment}>{text}</p>
        </div>
        <span className={classes.rating}>{rating}</span>
      </div>
    </article>
  );
}
