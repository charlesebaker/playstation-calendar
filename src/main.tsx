import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App.tsx";
import "./index.css";

// replace console.* to disable log on production
if (import.meta.env.MODE === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
);
