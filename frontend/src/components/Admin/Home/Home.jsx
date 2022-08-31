import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import './home.scss'

function Home() {
  return (
    <div className='adminHome'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar/>
        homeContainer
      </div>
    </div>
  )
}

export default Home