import React from 'react'
import Featured from '../Features/Featured'
import Chart from '../Chart/chart'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import Widget from '../Widget/Widget'
import Table from '../Table/Table'
import './home.scss'

function Home() {
  return (
    <div className='adminHome'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="adminWidgets">
          <Widget type='user' />
          <Widget type='order' />
          <Widget type='earning' />
          <Widget type='balance' />
        </div>
        <div className="charts">
          <Featured/>
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home