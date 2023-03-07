import { NavRoot, Headline, NavOptions, NavButton } from "./Nav.styles";
import { Link } from "react-router-dom";

const Nav = () => (
  <NavRoot>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Headline>Cave Adventure</Headline>
    </Link>
    <NavOptions>
      <Link to="/" style={{ textDecoration: "none" }}>
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/Shop" style={{ textDecoration: "none" }}>
        <NavButton>Shop</NavButton>
      </Link>
      <Link to="/Caves" style={{ textDecoration: "none" }}>
        <NavButton>Caves</NavButton>
      </Link>
    </NavOptions>
  </NavRoot>
);

export default Nav;
