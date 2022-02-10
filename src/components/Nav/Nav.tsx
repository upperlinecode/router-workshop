import { NavRoot, Headline, NavOptions, NavButton } from "./Nav.styles";
import { Link } from "react-router-dom";

const Nav = () => (
  <NavRoot>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Headline>Cave Adventure</Headline>
    </Link>
    <p>
      Click one of the links below to teleport. Use the "back" button on your
      browser to return to your previous location.
    </p>
    <NavOptions>
      <Link to="/">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/Shop">
        <NavButton>Shop</NavButton>
      </Link>
      <Link to="/Caves">
        <NavButton>Caves</NavButton>
      </Link>
    </NavOptions>
  </NavRoot>
);

export default Nav;
