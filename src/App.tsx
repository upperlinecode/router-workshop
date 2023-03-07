import { Outlet } from "react-router-dom";
import { AppRoot } from "./App.styles";
import Nav from "./components/Nav";
import Home from "./components/Home";
import CaveEntrance from "./components/CaveEntrance";
import Shop from "./components/Shop";

const App = () => {
  return (
    <AppRoot>
      <Nav />
      <Outlet />
    </AppRoot>
  );
};

export default App;
