const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:5173/callback"; // Change this to your redirect URI
const clientId = "152e431d007d4f6b919295585ac6b980"; // Replace with your Spotify client ID

const scopes = [
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-playback-state",
  "user-read-currently-playing",
];

// URL to redirect to Spotify login
export const getSpotifyLoginUrl = () => { 
  return `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
};

// Fetch user playlists
export const fetchPlaylists = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data.items;
};

// src/utils/spotify.js
export const fetchPlayer = async (accessToken) => {
  try {
    const response_rqt = await fetch("https://api.spotify.com/v1/me/player", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const response = await response_rqt.json();


    if (response.status === 204) {
      // No content: nothing is playing
      console.log("No track is currently playing.");
      return null;-
    }

    if (!response.ok) {
      console.error("Error fetching currently playing track:", response.statusText);
      return null;
    }

    const data = await response.json();
    console.log("Currently playing track data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching player:", error);
    return null;
  }
};


