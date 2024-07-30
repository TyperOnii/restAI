import { useContext } from "react";
import { AuthorizationContext } from "./Context";

export const useLogin = () => useContext(AuthorizationContext);
