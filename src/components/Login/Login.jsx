import React from "react";
import { getSpotifyLoginUrl } from "../../utils/spotify";
import "./Login.css";
import { RiLoginCircleFill } from "react-icons/ri";

const Login = () => {
  return (
    <div className="login-page">
      <div className="logo"></div>
      <div className="login-head">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
          alt=""
          className="img-height"
        />
        <h1 className="heading">Welcome to Spotify</h1>
      </div>

      <a href={getSpotifyLoginUrl()}>
        <button className="login-button">
          <RiLoginCircleFill className="icon" />
          Login with Spotify
        </button>
      </a>
    </div>
  );
};

export default Login;
