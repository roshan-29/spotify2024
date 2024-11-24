
import Playlist from "../Playlist/Playlist";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../utils/spotify";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token); // Get token from Redux store

  const [playlists, setPlaylists] = React.useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && !token) {
      const _token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(loginSuccess(_token)); // Dispatch login success action
      window.location.hash = ""; // Clear the URL hash
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (token) {
      fetchPlaylists(token).then((data) => {
        setPlaylists(data || []); // Ensure playlists is always an array
      });
    }
  }, [token]);
  return (
    <>
      <div className="home-layout">
        <img
          className="nav-left-logo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_White.png"
          alt=""
        />
        
      </div>
    </>
  );
};

export default Home;
