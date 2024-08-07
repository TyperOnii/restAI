import { useSelector } from "react-redux";
import { selectReviewById } from "../../Redux/entities/reviewSlice/reviewSlice";
import Review from "./Review";

export default function ReviewReceiver({ id }) {
  const { userId, text, rating } = useSelector((state) =>
    selectReviewById(state, id)
  );
  return <Review userId={userId} text={text} rating={rating} />;
}
