import { useSelector } from "react-redux";
import { selectUserById } from "../../Redux/entities/userSlice/userSlice";
import User from "./User";

export default function UserReceiver({ id }) {
  const { name } = useSelector((state) => selectUserById(state, id));

  return <User name={name} />;
}
