import { Paper, Typography as Type } from "@mui/material";

function AboutMe() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Type variant="h3">About Me</Type>
      <br />
      <Type paragraph>
        I've been programming since I was around 13. I've been dabbling in web
        development since I was around 15, and I'm currently taking a Web
        Development Boot Camp through the University of Minnesota.
      </Type>
      <Type paragraph>
        I've always been interested in math and programming, as well as
        education.
      </Type>
    </Paper>
  );
}

export default AboutMe;
