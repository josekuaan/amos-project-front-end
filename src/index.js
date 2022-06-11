import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProjectContext } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProjectContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProjectContext>
);
