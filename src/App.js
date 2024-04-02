import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Footer = () => {
  return (
    <section></section>
  );
}

const App = () => {
  const [userName, setUserName] = useState("Saikiran");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <section className="app-container">
          <Header />
          <Outlet />
          <Footer />
        </section>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;
