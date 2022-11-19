import { Grid, Paper, Typography as Type } from "@mui/material";
import { useEffect, useState } from "react";
import Project from "../components/Project";

function Portfolio() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const style = { margin: width > breakpoint ? "100px" : "0", padding: "25px" };

  return (
    <Paper style={style}>
      <Type variant="h3">Portfolio</Type>
      <br />
      <Grid container spacing={2}>
        <Project
          title="Wave Function Collapse"
          tags={["p5 canvas", "algorithms"]}
          repo="wave-function-collapse"
          image="images/projects/wfc.png"
        />
        <Project
          title="Amplitude Analysis"
          tags={["p5 canvas", "audio analysis"]}
          repo="amplitude-analysis"
          image="images/projects/amplitude-analysis.png"
        />
        <Project
          title="FFT Analysis"
          tags={["p5 canvas", "audio analysis"]}
          repo="fft-analysis"
          image="images/projects/fft.png"
        />
        <Project
          title="Fireworks"
          tags={["p5 canvas"]}
          repo="p5-fireworks"
          image="images/projects/fireworks.png"
        />
        <Project
          title="Tile Slide"
          tags={["game development", "canvas"]}
          repo="tile-slide"
          image="images/projects/tile-slide.png"
        />
        <Project
          title="Snake"
          tags={["game development", "canvas"]}
          repo="snake"
          image="images/projects/snake.png"
        />
        <Project
          title="Minesweeper"
          tags={["game development", "canvas"]}
          repo="minesweeper"
          image="images/projects/minesweeper.png"
        />
        <Project
          title="Password Generator"
          tags={["javascript"]}
          repo="password-generator"
          image="images/projects/password-generator.png"
        />
        <Project
          title="Weather App"
          tags={["apis", "asynchronous functions"]}
          repo="weatherapp"
          image="images/projects/weather-app.png"
        />
      </Grid>
    </Paper>
  );
}

export default Portfolio;
