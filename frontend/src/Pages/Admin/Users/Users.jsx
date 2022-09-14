import React from 'react'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import Navbar from '../../../components/Admin/Navbar/Navbar'
import UserList from '../../../components/Admin/UserList/UserList'

function Users() {
  return (
    <div className='userList'>
        <Sidebar/>
        <div className="listContainer">
            <Navbar/>
            <UserList/>
        </div>
    </div>
  )
}

export default Users