import React from 'react'
import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

function Navbar() {
    return (
        <div className='adminNavbar'>
            <div className="adminWraper">
                <div className="adminSearch">
                    <input type="text" placeholder='search' />
                    <SearchOutlinedIcon />
                </div>
                <div className="adminItems">
                    <div className="adminItem">
                        <LanguageOutlinedIcon className='adminIcon' />
                        English
                    </div>
                    <div className="adminItem">
                        <DarkModeOutlinedIcon className='adminIcon' />

                    </div>
                    <div className="adminItem">
                        <FullscreenExitOutlinedIcon className='adminIcon' />

                    </div>
                    <div className="adminItem">
                        <NotificationsNoneOutlinedIcon className='adminIcon' />

                    </div>
                    <div className="adminItem">
                        <ChatBubbleOutlineOutlinedIcon className='adminIcon' />

                    </div>
                    <div className="adminItem">
                        <ListAltOutlinedIcon className='adminIcon' />
                    </div>
                    <div className="adminItem">
                        <img src={require('../../../images/adminavatar.png')}
                        alt="admin"
                            className='adminAvatar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar