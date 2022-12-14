import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import { Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function FixedBottomNavigation() {
  return (
    <Box sx={{ pb: 7 }}>
      <CssBaseline />

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}>
        <Typography align="center">Made by Joe P. Shoulak</Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
          <Grid item xs={3}>
            <Link
              href="https://github.com/JoePShoulak"
              target="_blank"
              rel="noreferrer">
              <GitHubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joepshoulak/"
              target="_blank"
              rel="noreferrer">
              <LinkedInIcon />
            </Link>
            <Link
              href="https://twitter.com/JoePShoulak"
              target="_blank"
              rel="noreferrer">
              <TwitterIcon />
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
