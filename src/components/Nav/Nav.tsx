import { NavRoot, Headline, NavOptions, NavButton } from "./Nav.styles";
import { Link } from "react-router-dom";

const Nav = () => (
  <NavRoot>
    <Link to="/" style={{ textDecoration: "none" }}>
      <Headline>Cave Adventure</Headline>
    </Link>
    <NavOptions>
      <Link to="/">
        <NavButton>Home</NavButton>
      </Link>
      <Link to="/shop">
        <NavButton>Shop</NavButton>
      </Link>
      <Link to="/caves">
        <NavButton>Caves</NavButton>
      </Link>
    </NavOptions>
  </NavRoot>
);

export default Nav;
