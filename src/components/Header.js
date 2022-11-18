import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Navigation from "../components/Navigation";
import Link from "./Link";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            path="/"
            text="Joe P. Shoulak"
            variant="h5"
            neverActive={true}
          ></Link>
          <Navigation />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
