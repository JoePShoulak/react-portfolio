import { Paper, Typography as Type } from "@mui/material";

function Contact() {
  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Type variant="h3">Contact</Type>
      <br />
      <Type paragraph>You can contact me in many places</Type>
    </Paper>
  );
}

export default Contact;
