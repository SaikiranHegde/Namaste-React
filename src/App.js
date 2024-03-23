import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <section></section>
  );
}

const  App = () => {
  return (
    <section className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
