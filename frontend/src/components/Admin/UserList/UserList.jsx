import React from 'react'
import Datatable from './dataTable/Datatable'
import UserDetails from './userDetails/UserDetails'
import './userList.scss'
function UserList() {
  return (
    <div className='userContiner'>
        <Datatable/>
        <UserDetails/>
    </div>
  )
}

export default UserList