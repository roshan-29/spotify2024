// src/components/Player/Player.js
import React, { useEffect, useState } from "react";
import "./Player.css";
import { fetchPlayer } from "../../utils/spotify"; // Import your Spotify fetch logic
import logo from "../../assets/single-logo.png"
import { PiPlusCircleBold } from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";
import image from "../../assets/charlesdeluvio-6k4HkET8dPM-unsplash.jpg"
import { TiArrowShuffle } from "react-icons/ti";
import { IoIosSkipBackward } from "react-icons/io";

import { TbMicrophone2 } from "react-icons/tb";
import { IoIosSkipForward } from "react-icons/io";
import { TbRepeat } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineQueueList } from "react-icons/hi2";

import { PiDevicesBold } from "react-icons/pi";
import { GoUnmute } from "react-icons/go";
import { CgMiniPlayer } from "react-icons/cg";
import { TbArrowsDiagonal } from "react-icons/tb";

const Player = ({ accessToken }) => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const toggleIcon = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    const getCurrentTrack = async () => {
      if (accessToken) {
        const track = await fetchPlayer(accessToken);
        setCurrentTrack(track);
      }
    };

    getCurrentTrack();
    const interval = setInterval(getCurrentTrack, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [accessToken]);

 

  return (
    <div className="player">
      <div className="player-left">
        <div className="track-image">
          <img className="track-image" src={image} alt="" />
        </div>
        <div className="track-title-info">
          {" "}
          <div className="track-title">Drama Hitha Vachana</div>
          <div className="track-info">Tippu </div>
        </div>
        <div className="track-status" onClick={toggleIcon}>
          {isChecked ? (
            <FaCircleCheck className="icon check-icon" />
          ) : (
            <PiPlusCircleBold className="icon plus-icon" />
          )}
        </div>
      </div>
      <div className="player-center">
        <div className="track-options">
          <div className="shuffle">
            {" "}
            <TiArrowShuffle className="track-option-icon" />
          </div>
          <div className="previous">
            {" "}
            <IoIosSkipBackward className="track-option-icon" />
          </div>
          <div className="play-pause">
            {" "}
            <FaPlayCircle className="track-play-icon" />
          </div>
          <div className="next">
            <IoIosSkipForward className="track-option-icon" />
          </div>
          <div className="repeat">
            <TbRepeat className="track-option-icon" />
          </div>
        </div>

        <div className="track-time-info">
          <div className="current-time"> 0:00 </div>
          <div className="progress-bar"></div>
          <div className="total-time">4.30</div>
        </div>
      </div>
      <div className="player-right">
        <div>
          <AiOutlinePlaySquare className="track-option-icon" />
        </div>
        <div>
          <TbMicrophone2 className="track-option-icon" />{" "}
        </div>
        <div>
          {" "}
          <HiOutlineQueueList className="track-option-icon" />
        </div>
        <div>
          {" "}
          <PiDevicesBold className="track-option-icon" />
        </div>
        <div className="volume">
          {" "}
          <GoUnmute className="track-option-icon" />
          <div className="volume-bar"> </div>
        </div>

        <div>
          {" "}
          <CgMiniPlayer className="track-option-icon" />
        </div>
        <div>
          {" "}
          <TbArrowsDiagonal className="track-option-icon" />
        </div>
      </div>
    </div>
  );
};

export default Player;
