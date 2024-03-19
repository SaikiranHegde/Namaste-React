import "./App.css";
import appLogo from './assests/app-logo.svg';
import { defaultTo, map } from "ramda";

const Header = () => {
  return (
    <section className="header-container">
      <div className="logo-container">
        <img
          src={appLogo}
          alt="logo"
          className="app-logo"
        />
      </div>
      <div className="nav-items">
        <div>Home</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Cart</div>
      </div>
    </section>
  );
}

// Inline CSS

const RestaurantCard = (props) => {
  return (
    <section className="rest-card" style={{
      width: '250px',
      height: '250px',
    }}>
      <img alt={props.restData?.name} className="rest-img" src={props.restData?.image} />
      <div className="rest-name">{defaultTo('Asha Tiffins', props.restData.name)}</div>
      <div className="rest-info">{props.restData?.cuisines}</div>
      <div className="rest-info">4.5 Stars</div>
      <div className="rest-info">15 - 20 mins</div>
    </section>
  );
} 

// Mock Data
const RestaurantData = [
  {
    id: 1,
    name: "Asha Tiffins",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iyhixkvgcssweqmvesfk",
    cuisines: "South Indian, North Indian, Chinese",
  },
  {
    id: 2,
    name: "Udupi Food Hub",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hpulkfkzoh6kamqaaxdx",
    cuisines: "South Indian, North Indian, Chats",
  },
];

const Body = () => {
  return (
    <section className="content-container">
      <div className="search-bar">Search</div>
      <div className="rest-container">
        {map(
          (restData) => (
            <RestaurantCard restData={restData} key={restData.id} />
          ),
          RestaurantData
        )}
      </div>
    </section>
  );
};

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
