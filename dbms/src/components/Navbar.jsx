import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../assests/img/img.png";
import "./Navbar.css";
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="img" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>SHIMLA</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>MANALI</h6>
          </Link>
          <Link className="link" to="/?cat=technology">
            <h6>NANITAL</h6>
          </Link>
          <Link className="link" to="/?cat=cinema">
            <h6>MOSSORIE</h6>
          </Link>
          <Link className="link" to="/?cat=design">
            <h6>SINGLE</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
