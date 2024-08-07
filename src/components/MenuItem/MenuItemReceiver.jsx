import { useSelector } from "react-redux";
import { selectDishById } from "../../Redux/entities/dishSlice/dishSlice";
import MenuItem from "./MenuItem";

export default function MenuItemReceiver({ id }) {
  const { name, price, ingredients } = useSelector((state) =>
    selectDishById(state, id)
  );

  return <MenuItem name={name} price={price} ingredients={ingredients} />;
}
