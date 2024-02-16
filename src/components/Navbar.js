import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo1.png";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import userImg from "../images/electrician.jpg";
import { setUserLogout } from "../features/Slicers/LoginSlicer";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../screens/Loading";
function Navbar() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const {isLoggedIn} = useSelector((state)=> state.Slicer)
  const token = sessionStorage.getItem("token");

  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoading(true);
    toast.success("Logout Successfull");
    setTimeout(() => {
      setIsLoading(false);
      dispatch(setUserLogout());
      navigate("/");
      window.location.reload();
    }, 1000);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleOpen1 = () => {};

  // const location = useLocation();

  // const isExploreActive = location.pathname === "/Explore";
  // const isNotExploreActive = location.pathname === "/";
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container">
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
                {token && (
                  <Link className="nav-link" to="/requestservice">
                    My Request
                  </Link>
                )}
              </li>
              <li className="nav-item cursor-pointer">
                {!isOpen ? (
                  <button onClick={handleOpen} className="nav-link">
                    <Link to="Explore">
                      Explore <i className="fas fa-chevron-down "></i>
                    </Link>
                  </button>
                ) : (
                  <button onClick={handleOpen1} className="nav-link">
                    <a className="nav-link" href="/">
                      Explore <i className="fas fa-chevron-up "></i>
                    </a>
                  </button>
                )}
              </li>
            </ul>
            <ul className="navbar-nav d-flex" role="search">
              {token ? (
                <li className="nav-item dropdown navdrop">
                  <span
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={userImg} alt="logo" className="dropimg" />
                  </span>

                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/accountsettings">
                        Account Settings
                      </Link>
                    </li>
                    <li onClick={handleLogout}>
                      <Link className="dropdown-item" to="/">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        <ToastContainer position="bottom-right" />
        {isLoading && <Loading />}
      </nav>
    </>
  );
}

export default Navbar;
