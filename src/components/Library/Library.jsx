
import "./Library.css";
import Playlist from '../Playlist/Playlist';
import React, { useEffect ,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../../utils/spotify";

import { loginSuccess } from './../../actions/authActions';
import { HiPlus } from "react-icons/hi";
import { IoArrowBack } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";
import { MdOutlineList } from "react-icons/md";

const Library = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Recently added");
  const [viewOption, setViewOption] = useState("Grid");
  const [viewIcon, setViewIcon] = useState(<MdOutlineGridView />);
  const handleSortChange = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const handleViewChange = (option) => {
    setViewOption(option);
    if (option === "Grid") {
      setViewIcon(<MdOutlineGridView />);
    } else if (option === "Compact") {
      setViewIcon(<IoMenuOutline />);
    } else if (option === "List") {
      setViewIcon(<MdOutlineList />);
    }
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
    <div className="library-layout">
      <div className="library-header">
        <div className="library-header-left">
          {" "}
          <BiLibrary className="library-logo" />
          <div className="library-title">Your Library</div>
        </div>

        <div className="library-header-right">
          <div>
            {" "}
            <HiPlus className="plus" />
          </div>

          <div>
            {" "}
            <IoArrowBack className="arrrow" />
          </div>
        </div>
      </div>

      <div className="library-filter">
        <div className="library-options">
          <div className="library-option1">Playlists</div>
          <div className="library-option1">Artists</div>
          <div className="library-option1">Albums</div>
          <div className="library-option1">Podcasts</div>
        </div>
        <div className="library-navigate">
          <div>
            <IoSearch className="search-library" />
          </div>
          <div className="spotify-dropdown-container">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {sortOption} {viewIcon}
            </button>

            {isDropdownOpen && (
              <div className="dropdown-menu-container">
                {/* Sort by Dropdown */}
                <ul className="dropdown-menu">
                  <div>sort by</div>
                  <li onClick={() => handleSortChange("Recently added")}>
                    Recently added
                  </li>
                  <li onClick={() => handleSortChange("Alphabetical")}>
                    Alphabetical
                  </li>
                  <li onClick={() => handleSortChange("Custom order")}>
                    Custom order
                  </li>
                </ul>

                {/* View as Dropdown */}

                <ul className="dropdown-menu">
                  <div className="menu-header">View as</div>
                  <li onClick={() => handleViewChange("Grid")}>
                    <MdOutlineGridView className="view-icon" /> Grid
                  </li>
                  <li onClick={() => handleViewChange("Compact")}>
                    <IoMenuOutline className="view-icon" /> Compact
                  </li>
                  <li onClick={() => handleViewChange("List")}>
                    <MdOutlineList className="view-icon" />
                    List
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="table">
        <div className="table-headings">
          <div>Title</div>
          <div>Date Added</div>
          <div>Played</div>
        </div>
      </div>
      <div className="table-line"></div>
      <div className="playlist-container">
        {" "}
        <div className="lib-playlist">  <Playlist playlists={playlists} /></div>
      
      </div>
    </div>
  );
};

export default Library ;