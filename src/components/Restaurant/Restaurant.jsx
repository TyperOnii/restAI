import logo from "../../../public/rest-img.jpg";
import classes from "./Restaurant.module.css";
import Reviews from "../Reviews/Reviews";
import Menu from "../Menu/Menu";

export default function Restaurant({ restName, restReviewsIds, restMenuIds }) {
  return (
    <article className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.mainInfo}>
          <img className={classes.image} width="350px" src={logo} alt="rest" />
          <h3 className={classes.title}>{restName}</h3>
        </div>
        <div className={classes.secondaryInfo}>
          <h2 className={classes.category}>Menu</h2>
          <Menu ids={restMenuIds} />
          <h2 className={classes.category}>Review</h2>
          <Reviews ids={restReviewsIds} />
        </div>
      </div>
    </article>
  );
}
