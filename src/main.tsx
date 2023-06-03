import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";

import "./assets/styles/main.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <Router>
        <App />
      </Router>
    </ShoppingCartProvider>
  </React.StrictMode>
);
