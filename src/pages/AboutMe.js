import { Paper, Typography as Type } from "@mui/material";
import Image from "mui-image";

function AboutMe() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Image
        src="images/me.png"
        width="150px"
        alt="profile picture of Joe P Shoulak"
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
        education. After dabbling with technology for the majority of my life,
        and after many difficulties on my own educational journey, I'm taking
        this web development course to help prepare me to start creating a
        YouTube presence so I can start giving back to the community.
      </Type>
    </Paper>
  );
}

export default AboutMe;