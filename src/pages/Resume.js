import {
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  Paper,
  Typography as Type,
} from "@mui/material";
import { useEffect, useState } from "react";

function Resume() {
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
      <Type variant="h3">Resume</Type>
      <br />
      <Button download href="documents/Resume - Joe P Shoulak.pdf">
        Download Resume
      </Button>
      <Grid container spacing={2}>
        <Grid item lg={4} md={6} sm={12}>
          <Card>
            <CardContent>
              <Type variant="h4">Foundation</Type>
              <List>
                <ListItem>HTML/CSS/Git</ListItem>
                <ListItem>JavaScript</ListItem>
                <ListItem>Bootstrap</ListItem>
                <ListItem>Dom Manipulation</ListItem>
                <ListItem>APIs</ListItem>
                <ListItem>JQuery</ListItem>
                <ListItem>JSON</ListItem>
                <ListItem>AJAX</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4} md={6} sm={12}>
          <Card>
            <CardContent>
              <Type variant="h4">Technical</Type>
              <List>
                <ListItem>Node</ListItem>
                <ListItem>ES6</ListItem>
                <ListItem>Object-Oriented Programming</ListItem>
                <ListItem>Express</ListItem>
                <ListItem>MySQL</ListItem>
                <ListItem>MVC Paradigm</ListItem>
                <ListItem>Sequelize</ListItem>
                <ListItem>Testing</ListItem>
                <ListItem>Agile Development</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item lg={4} md={6} sm={12}>
          <Card>
            <CardContent>
              <Type variant="h4">Performance</Type>
              <List>
                <ListItem>Progressive Web Applications</ListItem>
                <ListItem>React</ListItem>
                <ListItem>NoSQL</ListItem>
                <ListItem>MERN Stack</ListItem>
                <ListItem>Computer Science Fundamentals</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Resume;
