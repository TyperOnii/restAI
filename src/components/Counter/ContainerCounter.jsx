import { useState } from "react";
import Counter from "./Counter";

export default function ContainerCounter({ min, max, step }) {
  const [value, setValue] = useState(min);

  const increment = () => value < max && setValue(value + step);
  const decrement = () => value > min && setValue(value - step);

  return <Counter value={value} increment={increment} decrement={decrement} />;
}
