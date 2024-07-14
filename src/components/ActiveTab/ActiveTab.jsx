import logo from "../../../public/rest-img.jpg";
import classes from "./ActiveTab.module.css";
import Menu from "../Menu/Menu";
import Reviews from "../Reviews/Reviews";

export default function ActiveTab({ rest }) {
  return (
    <article className={classes.card}>
      <div className={classes.inner}>
        <div className={classes.mainInfo}>
          <img className={classes.image} width="350px" src={logo} alt="rest" />
          <h3 className={classes.title}>{rest.name}</h3>
        </div>
        <div className={classes.secondaryInfo}>
          <h2 className={classes.category}>Menu</h2>
          {rest.menu && <Menu restMenu={rest.menu} />}
          <h2 className={classes.category}>Review</h2>
          {rest.reviews && <Reviews restReviews={rest.reviews} />}
        </div>
      </div>
    </article>
  );
}
