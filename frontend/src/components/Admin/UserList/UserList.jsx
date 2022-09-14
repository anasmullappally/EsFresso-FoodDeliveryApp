import React from 'react'
import Datatable from './DataTable/DataTable'
import UserDetails from './UserDetails/UserDetails'
import './userList.scss'
function UserList() {
  return (
    <div className='userContiner'>
        <Datatable/>
        {/* <UserDetails/> */}
    </div>
  )
}

export default UserList