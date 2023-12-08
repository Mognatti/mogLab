import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CurrentUserProvider } from "./context/authContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CurrentUserProvider>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </CurrentUserProvider>
);
