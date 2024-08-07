import { useSelector } from "react-redux";
import Restaurant from "./Restaurant";
import { selectRestaurantById } from "../../Redux/entities/restaurantSlice/restaurantSlice";

export default function RestaurantReceiver({ restId }) {
  const {
    name,
    menu: menuIds,
    reviews: reviewsIds,
  } = useSelector((state) => selectRestaurantById(state, restId));
  console.log(menuIds, "MenuID", reviewsIds, "ReviewID");
  return (
    <Restaurant
      restName={name}
      restMenuIds={menuIds}
      restReviewsIds={reviewsIds}
    />
  );
}
