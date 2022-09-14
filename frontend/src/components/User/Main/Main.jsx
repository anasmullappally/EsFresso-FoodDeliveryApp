import React from 'react'
import "./main.css";
import { MyLocationRounded, PlusOneRounded } from '@mui/icons-material';

function Main() {
  return (
    <main>
    <div className="mainContainer">
      <div className="bannerContainer">
      <img
            src={require('../../../images/bannerImage.png')}
            className="banner"
            alt=""
          />
          <div className="bannerSlogan">
            <h1 className="mainSlogan">ESFRESSO</h1>
            <h5 className="subSlogan">EAT GOOD FEEL GOOD</h5>
          </div>
          <div className="searchLocation">
            <MyLocationRounded className="locationIcon" />
            <select class="minimal">
              <option>Detect your location</option>
              <option><PlusOneRounded/> Add Location</option>
              <option>Banglure</option>
            </select>
            <input type="text" placeholder="Search items" />
          </div>
      </div>
    </div>
  </main>
  )
}

export default Main