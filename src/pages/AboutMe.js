import { Link, List, ListItem, Paper, Typography as Type } from "@mui/material";
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
        Hey there! My name is Joe. I remember when I was around 13 I decided I
        wanted to learn how to program, so I started messing around with Python
        on a cheap NetBook (shoutout to my first editor, IDLE). At around 15 or
        so, I pivoted to web development under the tutelege of one of my best
        friends and mentors, Nate. After making a few websites here and there, I
        pivoted to math for a while.
      </Type>
      <Type paragraph>
        During high school I pubished two papers on the Fibonacci numbers:
        <List>
          <ListItem>
            <Link to="https://www.kappamuepsilon.org/Pentagon/Vol_72_Num_1_Fall_2012.pdf">
              Patterns within the Final Digits of the Fibonacci Numbers
            </Link>
          </ListItem>
          <ListItem>
            <Link to="https://www.kappamuepsilon.org/Pentagon/Vol_74_Num_2_Spring_2015.pdf">
              Pisano Arrays and the Merit of Looking at Sequences in Two
              Dimensional Arrays
            </Link>
          </ListItem>
        </List>
        For the latter (which is mainly a reworking and expansion of the former)
        I received the Meritorious Performance Award from Minnesota Scholars of
        Distinction in Mathematics. I haven't continued my work as much as I
        would have liked, but I definitely haven't completely set it aside
        either.
      </Type>
      <Type paragraph>
        I continued back and forth between mathematics and programming, because
        they both scratch the same itch: solving a given problem. These days I
        tend to focus on programming, but the programming I end of doing tends
        to involve a lot of math, so who's so say what's what anymore?
      </Type>
      <Type paragraph>
        I have a passion for education, having been an amaetuer tutor throughout
        high school and a professional tutor until I opened my own Mathnasium
        franchice. As important as I find professional education services, the
        majority of what I've learned has come from the incredible community of
        free content producers who make these incredible technologies
        accessible. Because of that, I'm hoping to become one of those content
        creators myself.
      </Type>
      <Type paragraph>
        Most recently, I have almost completed the University of Minesota Web
        Development Boot Camp, which comprehensively teaches modern Full-Stack
        Development, focusing on the MERN Stack. It's been an incredible journey
        that helped me fill in some of the gaps in my self-education, as well as
        introducing me to some great peers and resources.
      </Type>
    </Paper>
  );
}

export default AboutMe;
