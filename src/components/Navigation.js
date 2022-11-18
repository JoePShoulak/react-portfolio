import * as React from "react";
import Link from "./Link";

function Navigation() {
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
