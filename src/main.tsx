import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./screens/home/home";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
