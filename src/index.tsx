import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CaveEntrance from "./components/CaveEntrance/CaveEntrance";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cave from "./components/Cave/Cave";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="Shop" element={<Shop />} />
          <Route path="Caves">
            <Route path="" element={<CaveEntrance />} />
            <Route path=":caveId" element={<Cave />} />
          </Route>
          {/* Client-side redirect -- all invalid slugs redirect to home. */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
