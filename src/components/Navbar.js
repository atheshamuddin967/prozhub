import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo1.png";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const isExploreActive = location.pathname === "/Explore";
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="Home">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="Explore">
                Explore
                {isExploreActive ? (
                  <i class="fas fa-chevron-up"></i>
                ) : (
                  <i class="fas fa-chevron-down"></i>
                )}
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav d-flex" role="search">
            <li className="nav-item">
              <Link className="nav-link" to="Login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Join us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
