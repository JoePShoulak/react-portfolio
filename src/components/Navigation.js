import * as React from "react";
import Typography from "@mui/material/Typography";
import { Link as RawLink } from "react-router-dom";

function Navigation() {
  function Link({ path, text }) {
    return (
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        <RawLink to={path} style={{ color: "#ffffff", textDecoration: "none" }}>
          {text}
        </RawLink>
      </Typography>
    );
  }

  return (
    <>
      <Link path="/" text="About Me" />
      <Link path="/portfolio" text="Portfolio" />
      <Link path="/contact" text="Contact" />
      <Link path="/resume" text="Resume" />
    </>
  );
}

export default Navigation;
