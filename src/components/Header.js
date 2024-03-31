import { useContext, useState } from 'react';
import appLogo from '../assests/app-logo.svg';
import { Button } from 'antd';
import { equals } from 'ramda';
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // User context data
  const { userName, setUserName } = useContext(UserContext);

  const toggleBtnName = () => {
    setBtnName(equals(btnName, "Login") ? "Logout" : "Login");
    setUserName("Saikiran Hegde");
  }

  return (
    <section className="header-container">
      <div className="logo-container cursor-pointer">
        <Link to="/" className='text-decoration-none color-inherit'><img src={appLogo} alt="logo" className="app-logo" /></Link>
      </div>
      <div className="nav-items">
        <Link to="/about" className='cursor-pointer text-decoration-none color-inherit'>About Us</Link>
        <Link to="/contact-us" className='cursor-pointer text-decoration-none color-inherit'>Contact Us</Link>
        <Link to="/cart" className='cursor-pointer text-decoration-none color-inherit'>Cart</Link>
        <div className="text-blue-700">{userName}</div>
        <Button type="dashed" onClick={toggleBtnName}>
          {btnName}
        </Button>
      </div>
    </section>
  );
};

export default Header;