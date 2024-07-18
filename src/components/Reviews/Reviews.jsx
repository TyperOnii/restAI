import classes from "./Reviews.module.css";
import Review from "../Review/Review";

export default function Reviews({ restReviews }) {
  return (
    <div className={classes.cards}>
      <div className={classes.inner}>
        {restReviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}
