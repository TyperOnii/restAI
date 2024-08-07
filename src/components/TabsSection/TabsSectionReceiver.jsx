import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../Redux/entities/restaurantSlice/restaurantSlice";
import TabsSection from "./TabsSection";

export default function TabsSectionReceiver() {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return <TabsSection restsIds={restaurantsIds} />;
}
