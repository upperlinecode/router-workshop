import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import Cave from "./components/Cave/Cave";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home/Home";
import NotFound from "./components/ErrorPages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/caves/:caveId?",
        element: <Cave />,
      },
      {
        path: "/anything-else",
      },
      {
        path: "/not-found",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <Navigate to="/not-found" replace />,
      },
      // {
      //   path: "*",
      //   element: <Navigate to="/" replace />,
      // },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
