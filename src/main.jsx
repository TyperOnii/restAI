import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/settings/normalize.css";
import "../src/settings/fonts.css";
import "../src/settings/vars.css";
import "../src/settings/global.css";
import "../src/settings/utils.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
