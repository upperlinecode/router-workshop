import { NavRoot, Headline, NavOptions, NavButton } from "./Nav.styles";
import { Link } from "react-router-dom";

const Nav = () => (
  <NavRoot>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Headline>Cave Adventure</Headline>
    </Link>
    <NavOptions>
      <NavButton>Home</NavButton>
      <NavButton>Shop</NavButton>
      <NavButton>Caves</NavButton>
    </NavOptions>
  </NavRoot>
);

export default Nav;
