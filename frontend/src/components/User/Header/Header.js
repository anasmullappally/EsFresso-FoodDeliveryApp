import React from "react";
import { } from "@mui/material";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

import "./header.css";
import Login from "../Login/Login";


function Header() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
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
      {/* <div className="profileContainer">
        <div className="imgBox">
          <img
            className="profilePic"
            src="https://raw.githubusercontent.com/emotion-js/emotion/main/emotion.png"
            alt="profileImage"
          />
        </div>
        <h2 className="userName">user</h2>
      </div> */}
      <div className="button">
        <button className="loginButton" onClick={handleClickOpen}>LogIn</button>
        <button className="registerButton" onClick={handleClickOpen}>Register</button>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>

      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <Login />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> */}
        </DialogActions>
      </Dialog>

    </header>
  );
}

export default Header;
