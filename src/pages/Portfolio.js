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
          tags={["algorithms"]}
          repo="https://github.com/JoePShoulak/wave-function-collapse"
          deploy="http://wavefunctioncollapse.io/"
          image="images/projects/wfc.png"
        />
        <Project
          title="Amplitude Analysis"
          tags={["p5 canvas", "audio analysis"]}
          repo="https://github.com/JoePShoulak/amplitude-analysis"
          deploy="https://joepshoulak.github.io/amplitude-analysis/"
          image="images/projects/amplitude-analysis.png"
        />
        <Project
          title="Tile Slide"
          tags={["game development", "canvas"]}
          repo="https://github.com/JoePShoulak/tile-slide"
          deploy="https://joepshoulak.github.io/tile-slide/"
          image="images/projects/tile-slide.png"
        />
        <Project
          title="Snake"
          tags={["game development", "canvas"]}
          repo="https://github.com/JoePShoulak/snake"
          deploy="http://joepshoulak.github.io/snake/"
          image="images/projects/snake.png"
        />
        <Project
          title="Minesweeper"
          tags={["game development", "canvas"]}
          repo="https://github.com/JoePShoulak/minesweeper"
          deploy="https://joepshoulak.github.io/minesweeper/"
          image="images/projects/minesweeper.png"
        />
        <Project
          title="Password Generator"
          tags={["game development", "canvas"]}
          repo="https://github.com/JoePShoulak/password-generator"
          deploy="https://joepshoulak.github.io/password-generator/"
          image="images/projects/password-generator.png"
        />
        <Project
          title="Weather App"
          tags={["apis", "asynchronous functions"]}
          repo="https://github.com/JoePShoulak/weatherapp"
          deploy="https://joepshoulak.github.io/weatherapp/"
          image="images/projects/weather-app.png"
        />
      </Grid>
    </Paper>
  );
}

export default Portfolio;
