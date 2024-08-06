import classes from "./ReviewForm.module.css";
import ContainerRating from "../Counter/ContainerRating";
import Button from "../Button/Button";
import { useReviewForm } from "./useReviewForm";
import { generateId } from "../../utils/generateId";

export default function ReviewForm({ addReviewHandler }) {
  const { form, setName, setText, increaseRating, decreaseRating, save } =
    useReviewForm();
  return (
    <>
      <form className={classes.form} action="">
        <div className={classes.inner}>
          <label className={classes.label} htmlFor="">
            <input
              className={classes.input}
              type="text"
              placeholder="Name"
              value={form.user}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className={classes.label} htmlFor="">
            <input
              className={classes.input}
              type="text"
              placeholder="Write to here your review about this restaurant"
              value={form.text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <ContainerRating
            rating={form.rating}
            increaseRatingHandler={increaseRating}
            decreaseRatingHandler={decreaseRating}
          />
          {form.user.length > 2 && form.text.length > 3 ? (
            <Button
              onClick={(e) => {
                e.preventDefault();
                addReviewHandler({
                  ...form,
                  id: generateId(),
                });
                save(null);
              }}
            >
              Save
            </Button>
          ) : (
            <Button styles="disabled" onClick={(e) => e.preventDefault()}>
              Save
            </Button>
          )}
        </div>
      </form>
    </>
  );
}
