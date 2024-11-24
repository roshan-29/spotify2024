import {useEffect,useState} from 'react'
import "./Navbar.css"
import { RxCross1 } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { GrInstallOption } from "react-icons/gr";

const Navbar = ({token}) => {


 const [error, setError] = useState(null);


 

  return (
    <div className="navbar-container">
      <div className="spotify-logo-container">
        <img
          className="nav-left-logo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
          alt=""
        />
      </div>
      <div className="nav-home-search">
        <div className="home-nav">
          <GoHome className="home-logo" />
        </div>
        <div className="search-container">
          <input
            type="search"
            name=""
            id=""
            placeholder="What do you want to play?"
          />
          <IoSearch className="search" />
          <div className="line-vertical"></div>
        </div>
        <div className="right-navbar">
          <div className="explore-premium"> Explore Premium </div>
          <div className="install-app">
            <div>
              <GrInstallOption className="install-icon" />
            </div>
            <div> Install App </div>
          </div>
          <div className="notifications">
            <IoNotificationsOutline className="notification-icon" />
          </div>
          <div className="profile-circle">
            <img
              className="profile-image"
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
              alt=""
            />
          </div>
        </div>
      </div>

    

    </div>
  );
}

export default Navbar
