import React, { useState, useEffect } from "react";
import { } from "@mui/material";
// import {
//   BarChart,
//   SearchRounded,
//   ShoppingCartRounded,
// } from "@mui/icons-material";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./header.css";
import Login from "../Login/Login";
import Register from "../Register/Register";

function Header() {
  let [login, setLogin] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log('avgdvcdacf');
    setAnchorEl(event.currentTarget);
  };
  let handleClose = () => {
    setShowRegisterModal(false);
    setAnchorEl(null);
  }
  let handleCloseLogin = () => setShowLoginModal(false);

  const handleLogout = () => {
    localStorage.removeItem('login')
    setLogin(false)
  }
  useEffect(() => {
    let user = localStorage.getItem("login");
    if (user) {
      setLogin(true);
    }
  }, [setLogin]);


  return (
    <header>
      <img
        className="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09GvkuTHftwlfilPgLNSgn9llW1iuen9XNA&usqp=CAU"
        alt="logo"
      />
      {/* <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>3</p>
        </div>
      </div> */}
      {login && (
        <div className="profileContainer">
          <div className="imgBox">

            <img
              onClick={handleClick}
              className="profilePic"
              src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png"
              alt="profileImage"
            />

          </div>
          <h2 className="userName">user</h2>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      )}
      {login === false && (
        <div className="button">
          <button
            className="loginButton"
            onClick={() => setShowLoginModal(true)}
          >
            LogIn
          </button>
          <button
            className="registerButton"
            onClick={() => setShowRegisterModal(true)}
          >
            Register
          </button>
        </div>
      )}
      {/* <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div> */}
      {showRegisterModal && (
        <Register onChange={handleClose} setLogin={setLogin} />
      )}
      {showLoginModal && (
        <Login onChange={handleCloseLogin} setLogin={setLogin} />
      )}
    </header>
  );
}

export default Header;
