import { AccountBoxOutlined, Dashboard, GroupOutlined, ListOutlined, LogoutOutlined, NotificationsActiveOutlined, SettingsOutlined, Store } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import './sidebar.scss'
function Sidebar() {
  let navigate = useNavigate()
  return (
    <div className="sidebar">
      <div className="top"><span className="logo">logo</span></div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li  onClick={() => navigate('/admin/adminHome')}>
            <Dashboard className='icon'/>
            <span>Dashbord</span>
          </li>
          <li>
            <Store className='icon'/>
            <span>Product</span>
          </li>
          <li>
            <ListOutlined className='icon'/>
            <span>Order</span>
          </li>
          <li onClick={() => navigate('/admin/users')}>
            <GroupOutlined className='icon'/>
            <span>Users</span>
          </li>
          <p className="title">LIST</p>
          <li>
            <NotificationsActiveOutlined className='icon'/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsOutlined className='icon'/>
            <span>Settings</span>
          </li>
          <li>
            <AccountBoxOutlined className='icon'/>
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlined className='icon'/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
}

export default Sidebar;