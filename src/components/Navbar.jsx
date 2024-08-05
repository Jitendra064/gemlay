import React from "react";
import "./Navbar.css";
import NavbarTwo from "./NavbarTwo";

const Navbar = () => {
  return (
    <div>
      <div className="navbar_top">
        <div className="row container-fluid">
          <div className="col-lg-10 text-center text-light">
            Gemlay By Garnet Lanee
          </div>
          <div className="col-lg-2 pincode_top">
            <span>
              <img src="https://www.gemlay.com/assets/header/flag.svg" alt="" />
            </span>
            <span>
              <img
                src="https://www.gemlay.com/assets/header/pinCodeModalIcon.svg"
                alt=""
              />
            </span>
            <span>Pincode</span>
          </div>
        </div>
      </div>
      <header className="navbar_one container-fluid">
        <div className="row d-flex justify-content-between ">
          <div className="col-lg-6  col-md-6 ">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-4 col-md-4 ">
                <div className="navbar-brand">
                  <a href="#">
                    <img
                      src="https://www.gemlay.com/assets/header/brand_logo.svg"
                      alt="Gemlay Logo"
                      className="logo-image"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 input_field">
                <input type="text" placeholder="Search Products...." />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6  ">
            <div className="row d-flex justify-content-evenly pt-2">
              <div className="col-lg-8 col-md-8 icon_menu">
                <div className="navbar-icon text-center border-end">
                  <img
                    src="https://www.gemlay.com/assets/header/gsp.svg"
                    alt=""
                  />
                  <br />
                  <span>GSP</span>
                </div>
                <div className="navbar-icon text-center border-end">
                  <img
                    src="https://www.gemlay.com/assets/header/wishlist-svg.svg"
                    alt=""
                  />
                  <br />
                  <span>WISHLIST</span>
                </div>
                <div className="navbar-icon text-center border-end">
                  <img
                    src="https://www.gemlay.com/assets/header/mini-cart.svg"
                    alt=""
                  />
                  <br />
                  <span>CART</span>
                </div>
                <div className="navbar-icon text-center border-end">
                  <img
                    src="https://www.gemlay.com/assets/header/qr.svg"
                    alt=""
                  />
                  <br />
                  <span>VARIFY REPORT</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 text-center sign_up">
                <p>
                  <img
                    src="https://www.gemlay.com/profile/profile.svg"
                    alt=""
                    height="40px"
                  />
                  <span style={{ marginLeft: "5px", fontSize: "15px" }}>
                    Sign in
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* navbar Other options  */}
      </header>
      <NavbarTwo />
    </div>
  );
};

export default Navbar;
