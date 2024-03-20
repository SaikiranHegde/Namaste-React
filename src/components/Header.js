import appLogo from '../assests/app-logo.svg';

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

export default Header;