import { NavLink } from "react-router-dom";

import { Nav } from './styles';
import { ThemeSwitch } from "../ThemeSwitch";

const Header = () => (
  <Nav>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/statistics">Statistics</NavLink></li>
      <li><NavLink to="/settings">Settings</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><ThemeSwitch /></li>
    </ul>
  </Nav>
)

export default Header;