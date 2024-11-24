// src/pages/Callback.jsx
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../actions/authActions";

const Callback = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Extract the token from the URL hash
    const hash = window.location.hash;
    if (hash) {
      const _token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch(loginSuccess(_token)); // Dispatch login success action
      window.location.hash = ""; // Clear the URL hash
      // Redirect to the dashboard or another page
      window.location.href = "/dashboard"; // Optional: redirect after login
    }
  }, [dispatch]);

  return <div>Loading...</div>; // Optional: You can show a loading state while processing
};

export default Callback;
