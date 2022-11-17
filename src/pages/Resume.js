import { Paper, Typography as Type } from "@mui/material";

function Resume() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Type variant="h3">Resume</Type>
      <br />
      <Type paragraph>I have a Resume</Type>
    </Paper>
  );
}

export default Resume;
