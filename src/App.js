import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { useState } from "react";

const Footer = () => {
  return (
    <section></section>
  );
}

const App = () => {
  const [userName, setUserName] = useState("Saikiran");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <section className="app-container">
        <Header />
        <Outlet />
        <Footer />
      </section>
    </UserContext.Provider>
  );
};

export default App;
