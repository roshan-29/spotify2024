import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/authActions";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
