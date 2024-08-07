import { useCallback, useState } from "react";
import { AuthorizationContext } from "./Context";

export default function AuthorizationContextProvider({ children }) {
  const [loginState, setLoginState] = useState({
    name: "Ruslan",
    isLogin: false,
  });

  const loginStateSwitcher = useCallback(() => {
    setLoginState((currentState) =>
      currentState.isLogin === false
        ? { ...currentState, isLogin: true }
        : { name: "", isLogin: false }
    );
  }, []);

  return (
    <AuthorizationContext.Provider value={{ loginState, loginStateSwitcher }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
