import { useState } from 'react';
import appLogo from '../assests/app-logo.svg';
import { Button } from 'antd';
import { equals } from 'ramda';
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const toggleBtnName = () => {
    setBtnName(equals(btnName, "Login") ? "Logout" : "Login");
  }

  return (
    <section className="header-container">
      <div className="logo-container cursor-pointer">
        <Link to="/" className='text-decoration-none color-inherit'><img src={appLogo} alt="logo" className="app-logo" /></Link>
      </div>
      <div className="nav-items">
        <Link to="/about" className='cursor-pointer text-decoration-none color-inherit'>About Us</Link>
        <Link to="/contact-us" className='cursor-pointer text-decoration-none color-inherit'>Contact Us</Link>
        <div className="cursor-pointer">Cart</div>
        <Button type="dashed" onClick={toggleBtnName}>
          {btnName}
        </Button>
      </div>
    </section>
  );
};

export default Header;