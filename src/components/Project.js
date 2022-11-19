import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function joinWithGrammer(array) {
  if (array.length === 1) return array[0];

  const copy = [...array];
  const last = copy.pop();

  if (copy.length === 1) return `${copy[0]} and ${last}`;

  return copy.join(", ") + `, and ${last}`;
}

function Project(props) {
  const repo = `https://github.com/JoePShoulak/${props.repo}`;
  const deploy = `https://joepshoulak.github.io/${props.repo}`;

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
            This project demonstrates the use of {joinWithGrammer(props.tags)}.
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
