import React from "react";
import "./userDetails.scss";

function UserDetails() {
  return (
    <div className="userDetails">
      <div className="heading">
        <p>Details</p>
      </div>
      <div className="mainContainer">
        <div className="photoContainer">
          <img
            src=""
            alt=""
          />
        </div>
        <div className="detailsContainer">
          <p>Jessica jessy</p>
        </div>
      </div>
      <hr />
      <div className="bottomContaienr">
        <ul className="listContainer">
          <li className="lists">
            <li className="list">
             <p>Name:</p> 
            </li>
            <li className="list">
              <p>Jessica</p>
            </li>
            
          </li>
          <li className="lists">
            <li className="list">
             <p>Mobile number:</p> 
            </li>
            <li className="list">
              <p>8137947670</p>
            </li>
            
          </li>
          <li className="lists">
            <li className="list">
             <p>Email:</p> 
            </li>
            <li className="list">
              <p>jessica@gmail.com</p>
            </li>
            
          </li>
          <li className="lists">
            <li className="list">
             <p>Building/Flat no:</p> 
            </li>
            <li className="list">
              <p>550</p>
            </li>
            
          </li>
          <li className="lists">
            <li className="list">
             <p>City</p> 
            </li>
            <li className="list">
              <p>Malappuram</p>
            </li>
            
          </li>
          <li className="lists">
            <li className="list">
             <p>Pin</p> 
            </li>
            <li className="list">
              <p>679321</p>
            </li>
            
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserDetails;