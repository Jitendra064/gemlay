/* eslint-disable no-unused-vars */
import React from "react";
import "./PhoneNavbar.css";

const PhoneNavbar = () => {
  return (
    <div>
      <div className="navbar-header" id="scroll-container">
        <div id="scroll-text"> Gemlay By Garnet Lanee</div>
      </div>
      <div className="navbar-menu">
        <div className="menu-item">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/menu--v1.png"
            alt="menu--v1"
          />
        </div>
        <div className="logo-item">
          <a href="#">
            <img
              src="https://www.gemlay.com/assets/header/brand_logo.svg"
              alt="Gemlay Logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className="option-item">
          {/* search item  */}
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
          />
          {/* like item  */}
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/like--v1.png"
            alt="like--v1"
          />

          {/* shoping bag icon  */}
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/emoji/48/shopping-bags.png"
            alt="shopping-bags"
          />
        </div>
      </div>
      <div className="navbar-triangle row">
        <div className="triangle-one col"></div>
        <div className="triangle-two col"></div>
      </div>
    </div>
  );
};

export default PhoneNavbar;
