import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";
import CaveEntrance from "./components/CaveEntrance";
import Cave from "./components/Cave";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "Caves",
        element: <CaveEntrance />,
      },
      {
        path: "Caves/:caveId",
        element: <Cave />,
      },
      {
        path: "not-found",
        element: <p>not found</p>,
      },
      {
        path: "*",
        element: <Navigate to="/not-found" replace />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
