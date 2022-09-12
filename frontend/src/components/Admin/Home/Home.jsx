import React from 'react'
import './home.scss'
import Chart from './Chart/Chart'
import Featured from './Featured/Featured'
import Table from './Table/Table'
import Widget from './Widget/Widget'
function Home() {
  return (
    <>
    <div className='widgets'>
      <Widget type='user'/>
      <Widget type='order'/>
      <Widget type='earning'/>
      <Widget type='balance'/>
    </div>
    <div className="charts">
      <Featured/>
      <Chart/>
    </div>
    <div className="listContainer">
      <div className="listTitle">Latest Trasnsactions</div>
      <Table/>
    </div>
    </>
    
  )
}

export default Home