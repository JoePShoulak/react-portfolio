import { Paper, Typography as Type } from "@mui/material";
import Image from "mui-image";
import { useEffect, useState } from "react";

function AboutMe() {
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
    <Paper style={style} width="fluid">
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
