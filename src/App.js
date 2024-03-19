import "./App.css";
import appLogo from './assests/app-logo.svg';

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
const RestuarantCard = () => {
  return (
    <section className="rest-card" style={{
      width: '250px',
      height: '250px',
    }}>
      <img alt="Asha Tiffins" className="rest-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iyhixkvgcssweqmvesfk" />
      <div className="rest-name">Asha Tiffins</div>
      <div className="rest-info">South Indian, North Indian, Chinese</div>
      <div className="rest-info">4.5 Stars</div>
      <div className="rest-info">15 - 20 mins</div>
    </section>
  );
}

const Body = () => {
  return (
    <section className="content-container">
      <div className="search-bar">Search</div>
      <div className="rest-container">
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
        <RestuarantCard />
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <section>
      Footer
    </section>
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
