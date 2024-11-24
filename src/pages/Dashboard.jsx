import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Library from "../components/Library/Library";
import Player from "../components/Player/Player";
import Home from "../components/Home/Home";
import { fetchPlaylists } from "../utils/spotify";
import "./Dashboard.css";

const Dashboard = () => {
  const [playlists, setPlaylists] = useState([]);
  const [accessToken, setAccessToken] = useState(null);
  const [libraryWidth, setLibraryWidth] = useState(() => {
    const savedWidth = localStorage.getItem("libraryWidth");
    return savedWidth ? parseInt(savedWidth, 10) : 300;
  });

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("accessToken");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.localStorage.setItem("accessToken", token);
      window.location.hash = "";
    }

    setAccessToken(token);

    if (token) {
      fetchPlaylists(token).then((data) => setPlaylists(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("libraryWidth", libraryWidth);
  }, [libraryWidth]);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    // Adjusted to respect a minimum width of 20px
    const newWidth = Math.max(70, Math.min(window.innerWidth - 100, e.clientX));
    setLibraryWidth(newWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="library" style={{ width: `${libraryWidth}px` }}>
          <Library />
        </div>
        <div className="resize">
          <div className="resizer" onMouseDown={handleMouseDown}></div>
        </div>
        <div className="home">
          <Home />
        </div>
      </div>
      <Player accessToken={accessToken} />
    </>
  );
};

export default Dashboard;
