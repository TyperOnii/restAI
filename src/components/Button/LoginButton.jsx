import { useLogin } from "../AuthorizationContextProvider/Hook";
import Button from "./Button";

export default function LoginButton() {
  const { loginState, loginStateSwitcher } = useLogin();
  return (
    <Button onClick={loginStateSwitcher}>
      {loginState.isLogin === false ? "Login" : "Go out"}
    </Button>
  );
}
