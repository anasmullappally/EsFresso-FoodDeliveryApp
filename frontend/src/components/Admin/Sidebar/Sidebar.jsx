import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='adminLogo'>Admin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="adminTitle">MAIN</p>
          <li>
            <DashboardIcon className='adminIcon'/>
            <span> Dashboard </span>
          </li>
          <p className="adminTitle">LIST</p>
          <li>
            <PeopleOutlineOutlinedIcon className='adminIcon'/>
            <span> Users </span>
          </li>
          <li>
            <MenuBookOutlinedIcon className='adminIcon' />
            <span> Restaurants </span>
          </li>
          <li>
            <Inventory2OutlinedIcon className='adminIcon' />
            <span> Products </span>
          </li>
          <li>
            <ReceiptLongOutlinedIcon  className='adminIcon'/>
            <span> Orders </span>
          </li>
          <p className="adminTitle">USEFULL </p>
          <li> 
            <NotificationsNoneOutlinedIcon  className='adminIcon'/>
            <span> Notification </span>
          </li>
          <p className="adminTitle">USER</p>
          <li>
            <AccountCircleOutlinedIcon className='adminIcon'/>
            <span> Profile </span>
          </li>
          <li>
            <LogoutOutlinedIcon className='adminIcon'/>
            <span> LogOut </span>
          </li>
        </ul>
      </div>
      <div className="adminBottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar