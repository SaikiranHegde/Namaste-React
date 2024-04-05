import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import LoginButtonContext from "./utils/LoginButtonContext";

const Footer: React.FC = () => {
  return (
    <section>Footer</section>
  );
}

const App: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [loginButton, setLoginButton] = useState<string>("Login");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <LoginButtonContext.Provider value={{ loginButton, setLoginButton }}>
          <section className="app-container">
            <Header />
            <Outlet />
            {/* <Footer /> */}
          </section>
        </LoginButtonContext.Provider>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
