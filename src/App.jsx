// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login/Login"; // Import your login page

import Callback from './pages/Callback'; // Create this component


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      
        <Route path="/callback" element={<Callback />} />{" "}
       
        {/* Ensure this is defined */}
      </Routes>
    </Router>
  );
};

export default App;
