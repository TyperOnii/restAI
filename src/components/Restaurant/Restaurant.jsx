import logo from "../../../public/rest-img.jpg";
import classes from "./Restaurant.module.css";
import Menu from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";
import ReviewForm from "../ReviewForm/ReviewForm";
import { useState } from "react";

export default function Restaurant({ rest }) {
  const [restReviewsState, setRestReviewsState] = useState(rest.reviews);

  const addReviewHandler = (newReview) => {
    setRestReviewsState([...rest.reviews, newReview]);
  };

  return (
    <article className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.mainInfo}>
          <img className={classes.image} width="350px" src={logo} alt="rest" />
          <h3 className={classes.title}>{rest.name}</h3>
        </div>
        <div className={classes.secondaryInfo}>
          <div>
            {" "}
            <h2 className={classes.category}>Menu</h2>
            {rest.menu && <Menu restMenu={rest.menu} />}
          </div>
          <div>
            <h2 className={classes.category}>Reviews</h2>
            {/* В СТРОЧКЕ НИЖЕ ОШИБКА --------------------------------------- */}
            {rest.reviews && <Reviews restReviews={restReviewsState} />}
          </div>
          <div>
            <h2 className={classes.category}>Write your review</h2>
            <ReviewForm addReviewHandler={addReviewHandler} />
          </div>
        </div>
      </div>
    </article>
  );
}
