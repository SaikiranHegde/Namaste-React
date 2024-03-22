import { useState } from 'react';
import appLogo from '../assests/app-logo.svg';
import { Button } from 'antd';
import { equals } from 'ramda';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const toggleBtnName = () => {
    setBtnName(equals(btnName, "Login") ? "Logout" : "Login");
  }

  return (
    <section className="header-container">
      <div className="logo-container">
        <img src={appLogo} alt="logo" className="app-logo" />
      </div>
      <div className="nav-items">
        <div className="cursor-pointer">Home</div>
        <div className="cursor-pointer">About Us</div>
        <div className="cursor-pointer">Contact Us</div>
        <div className="cursor-pointer">Cart</div>
        <Button type="dashed" onClick={toggleBtnName}>
          {btnName}
        </Button>
      </div>
    </section>
  );
};

export default Header;