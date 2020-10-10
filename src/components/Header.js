import React, { useEffect } from "react";
import logo from "../acy_security_logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Header = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  const openMenu = () => {
    document.querySelector(".menu").classList.add("open");
    document.querySelector("html").classList.add("noscroll");
  };
  const closeMenu = () => {
    document.querySelector(".menu").classList.remove("open");
    document.querySelector("html").classList.remove("noscroll");
  };
  useEffect(() => {}, [userInfo]);
  const handleLogout = (e) => {
      e.preventDefault();
    dispatch(logout());
    console.log("logout");
    //props.history.push("/");
  };
  return (
    <header className="webinar-header">
      <div className="container">
        <div className="toggle-btn" id="toggle-btn" onClick={openMenu}>
          <span className="up"></span>
          <span className="mid"></span>
          <span className="down"></span>
        </div>
        <Link to="/" className="webinar-logo">
          <img src={logo} alt="logo" />
        </Link>
        <div className="menu">
          <span className="close" onClick={closeMenu}></span>
          <ul>
            <li>
              <Link to="/">Why ACY</Link>
            </li>
            <li>
              <Link to="/">Poducts</Link>
            </li>
            <li>
              <Link to="/">Platforms</Link>
            </li>
            <li>
              <Link to="/">Education</Link>
            </li>
            <li>
              <Link to="/">Partners</Link>
            </li>
          </ul>
        </div>

        {userInfo ? (
          <div className="header-links">
            <Link to="/profile" className="pro-link">Profile</Link>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="header-links">
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
