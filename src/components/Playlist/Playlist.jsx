import React from "react";
import love from "../../assets/episodes.png";
import "./Playlist.css";

const Playlist = ({ playlists }) => {
  return (
    <div className="playlist">
      <table className="playlist-table">
      
        <tbody>
          {playlists.map((playlist) => (
            <tr
              key={playlist.id}
              className="playlist-item"
            
            >
              <td>
                <img
                  src={playlist.images?.[0]?.url || love} // Fallback image
                  alt={playlist.name || "Playlist"} // Fallback alt text
                  className="playlist-image"
                />
              </td>
              <td className="playlist-title">
                {playlist.name || "Untitled Playlist"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
