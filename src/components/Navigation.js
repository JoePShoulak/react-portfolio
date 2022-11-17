import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/">Portfolio</Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/about">About Me</Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/contact">Contact</Link>
      </Typography>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <Link to="/resume">Resume</Link>
      </Typography>
    </>
  );
}

export default Navigation;
