import React from "react";
import "./navbar.css";
import Notification from ".././Img/Icons/notification.png";
import Search from ".././Img//Icons/search.png";
import Proflie from ".././Img/Icons/boy.jpg";

export default function Navbar() {
  return (
    <div className="MainNavbarContainer">
      {/* <div className='dashboardContainer'>
        <h1 className='dashtext'>Dashboard</h1>
      </div> */}
      {/* <div className='searchItemContainer'>
        <img src={`${Search}`} className="searchIcon" alt='' />
        <input className='searchInput' placeholder='Search' type="search" />
      </div> */}
      <div className="proflieItemContainer">
        {/* <img src={`${Notification}`} className="NotificationIcon" alt='' /> */}
        <div className="proflieItem">
          <img src={`${Proflie}`} className="ProflieIcon" alt="" />
          <p className="proflieName">ADMIN</p>
        </div>
      </div>
    </div>
  );
}
