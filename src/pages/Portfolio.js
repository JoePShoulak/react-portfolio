import { Paper, Typography as Type } from "@mui/material";
import Project from "../components/Project";

function Portfolio() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Type variant="h3">Portfolio</Type>
      <br />
      <Type paragraph>
        TODO: This should contain tiles elements that showcase projects I've
        done.
      </Type>
      <Project
        title="Wave Function Collapse"
        tags={["algorithms"]}
        repo="https://github.com/JoePShoulak/wave-function-collapse"
        deploy="http://wavefunctioncollapse.io/"
        image="images/projects/wfc.png"
      />
    </Paper>
  );
}

export default Portfolio;
