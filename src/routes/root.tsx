import { Outlet } from "react-router-dom";

import Nav from "../components/Nav";

import { AppRoot } from "../App.styles";

export default function Root() {
  return (
    <AppRoot>
      <Nav />
      <Outlet />
    </AppRoot>
  );
}
