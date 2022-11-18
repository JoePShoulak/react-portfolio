import { Paper, Typography as Type } from "@mui/material";
import Image from "mui-image";

function AboutMe() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Image
        src="images/me.png"
        width="150px"
        alt="profile picture of Joe P Shoulak"
        duration="1000"
      />
      <br />
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
      <Type paragraph>TODO: Expand on this.</Type>
    </Paper>
  );
}

export default AboutMe;
