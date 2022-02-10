import React from "react";
import { AppRoot } from "./App.styles";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <AppRoot>
      <Nav></Nav>
      <Outlet />
    </AppRoot>
  );
};

export default App;
