import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function joinWithGrammer(array) {
  if (array.length === 1) return array[0];

  const last = array.pop();

  if (array.length === 1) return `${array[0]} and ${last}`;

  return array.join(", ") + `, and ${last}`;
}

function Project(props) {
  return (
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
        <Button size="small" href={props.repo} target="_blank">
          GitHub
        </Button>
        <Button size="small" href={props.deploy} target="_blank">
          View Project
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project;
