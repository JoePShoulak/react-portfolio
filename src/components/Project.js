import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

import { Octokit } from "octokit";
// function joinWithGrammer(array) {
//   if (array.length === 1) return array[0];

//   const copy = [...array];
//   const last = copy.pop();

//   if (copy.length === 1) return `${copy[0]} and ${last}`;

//   return copy.join(", ") + `, and ${last}`;
// }

function Project(props) {
  const repo = `https://github.com/JoePShoulak/${props.repo}`;
  const deploy = `https://joepshoulak.github.io/${props.repo}`;
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchData = async (repo) => {
      const octokit = new Octokit({
        auth: "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",
      });

      const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: "joepshoulak",
        repo: props.repo,
      });

      setDescription(data.description);
    };
    fetchData(props.repo);
  }, []);

  return (
    <Grid item lg={3} md={4} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={repo} target="_blank">
            GitHub
          </Button>
          <Button size="small" href={deploy} target="_blank">
            View Project
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Project;
