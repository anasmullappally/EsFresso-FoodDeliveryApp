import React from 'react'
import AdminHome from '../../../components/Admin/Home/Home'
import Sidebar from '../../../components/Admin/Sidebar/Sidebar'
import Header from '../../../components/Admin/Navbar/Navbar'

function Home() {
    return (
        <div className='adminHome' >
            <Sidebar />
            <div className='homeConatiner'>
                <Header />
                <AdminHome />
            </div>

        </div>
    )
}

export default Home