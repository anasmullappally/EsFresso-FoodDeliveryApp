import React from "react";
import {} from "@mui/material";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import "./header.css";
function Header() {
  return (
    <header>
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09GvkuTHftwlfilPgLNSgn9llW1iuen9XNA&usqp=CAU"
        alt="logo"
      />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>3</p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <img
            className="profilePic"
            src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png"
            alt="profileImage"
          />
        </div>
        <h2 className="userName">user</h2>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
