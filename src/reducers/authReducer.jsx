// Define the initial state, either from localStorage or empty
const initialState = {
  token: localStorage.getItem("spotify_token") || null,
};

// Auth reducer to handle login/logout actions
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("spotify_token", action.payload); // Persist token to localStorage
      return {
        ...state,
        token: action.payload,
      };
    case "LOGOUT":
      localStorage.removeItem("spotify_token"); // Remove token from localStorage
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
