import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./app";


function Content() {
  return (
    <nav className="main-wrapper">
    <App />
    </nav>
  );
}


const html = document.getElementById("root");
createRoot(html).render(<Content />);










