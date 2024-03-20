import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

const Footer = () => {
  return (
    <section></section>
  );
}

const  App = () => {
  return (
    <section className="app-container">
      <Header />
      <Body />
      <Footer />
    </section>
  );
}

export default App;
