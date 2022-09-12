import {
    ChatBubbleOutlineOutlined,
    DarkModeOutlined,
    FullscreenExitOutlined,
    LanguageOutlined,
    ListOutlined,
    NotificationsNoneOutlined,
    SearchOutlined,
  } from "@mui/icons-material";
  import React from "react";
  import "./navbar.scss";
  
  function Navbar() {
    return (
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlined />
          </div>
          <div className="items">
            <div className="item">
              <LanguageOutlined className="icon" />
              English
            </div>
            <div className="item">
              <DarkModeOutlined className="icon" />
            </div>
            <div className="item">
              <FullscreenExitOutlined className="icon" />
            </div>
            <div className="item">
              <NotificationsNoneOutlined className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlined className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ListOutlined className="icon" />
            </div>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                alt=""
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Navbar;