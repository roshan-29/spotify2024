import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import { Provider } from "react-redux";
import store from "./store"; // Adjust the path if necessary
import App from "./App";
import "./index.css"
const container = document.getElementById("root"); // Get the root element
const root = createRoot(container); // Create root using createRoot

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
