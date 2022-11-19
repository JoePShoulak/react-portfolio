import { Grid, Paper, Typography as Type } from "@mui/material";
import Project from "../components/Project";

function Portfolio() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Type variant="h3">Portfolio</Type>
      <br />
      <Grid container spacing={2}>
        <Project
          title="Wave Function Collapse"
          repo="wave-function-collapse"
          image="images/projects/wfc.png"
        />
        <Project
          title="Amplitude Analysis"
          repo="amplitude-analysis"
          image="images/projects/amplitude-analysis.png"
        />
        <Project
          title="FFT Analysis"
          repo="fft-analysis"
          image="images/projects/fft.png"
        />
        <Project
          title="Fireworks"
          repo="p5-fireworks"
          image="images/projects/fireworks.png"
        />
        <Project
          title="Tile Slide"
          repo="tile-slide"
          image="images/projects/tile-slide.png"
        />
        <Project title="Snake" repo="snake" image="images/projects/snake.png" />
        <Project
          title="Minesweeper"
          repo="minesweeper"
          image="images/projects/minesweeper.png"
        />
        <Project
          title="Password Generator"
          repo="password-generator"
          image="images/projects/password-generator.png"
        />
        <Project
          title="Weather App"
          repo="weatherapp"
          image="images/projects/weather-app.png"
        />
      </Grid>
    </Paper>
  );
}

export default Portfolio;
