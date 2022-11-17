import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <Link to="/">Portfolio</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </ul>
  );
}

export default Navigation;
