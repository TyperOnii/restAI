import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../Redux/entities/restaurantSlice/restaurantSlice";
import Tab from "./Tab";

export default function TabReceiver({ restId, restChanger }) {
  const { name } = useSelector((state) => selectRestaurantById(state, restId));

  return <Tab text={name} onClick={restChanger} id={restId} />;
}
