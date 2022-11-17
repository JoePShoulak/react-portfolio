import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

export default function FixedBottomNavigation() {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <Typography align="center">Made by Joe P. Shoulak</Typography>
      </Paper>
    </Box>
  );
}
