import React from "react";
import { useContext, useState } from 'react';
import { ReactComponent as AppLogo } from '../assets/app-logo.svg';
import { Button } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
import { AppState } from "../utils/appStore";
import { isNotNullOrEmpty } from "../utils/util";
import LoginButtonContext from "../utils/LoginButtonContext";

const Header: React.FC = () => {
  // User context data
  const { userName, setUserName } = useContext(UserContext);

  const { loginButton, setLoginButton } = useContext(LoginButtonContext);

  // Subscribe to Store and access Cart Slice
  const cartItems = useSelector((store: AppState) => store.cart.items);

  const navigate = useNavigate();

  const toggleBtnName = () => {
    // setBtnName(isNotNullOrEmpty(userName) ? "Logout" : "Login");
    if (isNotNullOrEmpty(userName)) {
      setUserName!("");
      setLoginButton!("Login");
    } else {
      navigate("/login");
    }
  }

  return (
    <section className="header-container">
      <div className="logo-container cursor-pointer">
        <Link to="/" className='text-decoration-none color-inherit'><AppLogo className="app-logo" /></Link>
      </div>
      <div className="nav-items">
        <Link to="/about" className='cursor-pointer text-decoration-none color-inherit'>About Us</Link>
        <Link to="/contact-us" className='cursor-pointer text-decoration-none color-inherit'>Contact Us</Link>
        <Link to="/cart" className='cursor-pointer text-decoration-none color-inherit'>Cart({ cartItems.length })</Link>
        <Link to="/instamart" className='cursor-pointer text-decoration-none color-inherit'>Instamart</Link>
        { isNotNullOrEmpty(userName) &&  <div className="text-blue-700">{userName}</div>}
        <Button type="dashed" onClick={toggleBtnName}>
          {loginButton}
        </Button>
      </div>
    </section>
  );
};

export default Header;