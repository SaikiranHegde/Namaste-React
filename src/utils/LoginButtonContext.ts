import { createContext } from "react";
import { LoginButtonContextType } from "../types/types";

const LoginButtonContext = createContext<LoginButtonContextType>({
  loginButton: "Login"
});

export default LoginButtonContext;