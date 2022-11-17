import { Paper, Typography as Type } from "@mui/material";

function Resume() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Type variant="h3">Resume</Type>
      <br />
      <Type paragraph>
        TODO: This should contain a link to a downloadable resume, as well as a
        list of my skills as a developer.
      </Type>
    </Paper>
  );
}

export default Resume;
