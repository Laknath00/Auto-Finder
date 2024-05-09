import React from "react";
import banner from '../../assets/banner.jpg'
import './banner.css';


function MainBanner() {

    

    return (
        <div className="banner">
          <img src={banner} alt="Main_banner" className="main" />
        </div>
    )
}

export default MainBanner