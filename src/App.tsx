import React from "react";
import { AppRoot } from "./App.styles";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import CaveEntrance from "./components/CaveEntrance/CaveEntrance";
import Shop from "./components/Shop/Shop";

const App = () => {
  return (
    <AppRoot>
      <Nav></Nav>
      <Home />
      <Shop />
      <CaveEntrance />
    </AppRoot>
  );
};

export default App;
