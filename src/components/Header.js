import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Navigation from "../components/Navigation";
import Link from "./Link";

export default function ButtonAppBar() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 700;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {width > breakpoint && (
            <Link
              path="/"
              text="Joe P. Shoulak"
              variant="h5"
              neverActive={true}></Link>
          )}
          <Navigation />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
