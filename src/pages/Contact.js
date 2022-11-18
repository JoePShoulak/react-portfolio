import { Button, Paper, TextField, Typography as Type } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [lastField, setLastField] = useState("");

  const errors = {
    nameEmpty: "Name can't be empty",
    emailEmpty: "Email can't be empty",
    emailInvalid: "Email is not valid",
    messageEmpty: "Message can't be empty",
  };

  const [error, setError] = useState({
    name: errors.nameEmpty,
    email: errors.emailEmpty,
    message: errors.messageEmpty,
  });

  const getName = (e) => {
    const val = e.target.value;

    if (val.length > 0) {
      setName(val);
      delete error.name;
    } else {
      setError({ ...error, name: errors.nameEmpty });
    }

    setLastField("name");
  };

  const getEmail = (e) => {
    const val = e.target.value;

    if (val.length === 0) {
      setError({ ...error, email: errors.emailEmpty });
    } else if (!val.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setError({ ...error, email: errors.emailInvalid });
    } else {
      setEmail(val);
      delete error.email;
    }

    setLastField("email");
  };

  const getMessage = (e) => {
    const val = e.target.value;

    if (val.length > 0) {
      setMessage(val);
      delete error.message;
    } else {
      setError({ ...error, message: errors.messageEmpty });
    }

    setLastField("message");
  };

  const submitForm = () => {
    if (Object.values(error).length !== 0) return;

    console.log(name, email, message);
  };

  const displayError = () => {
    if (Object.keys(error).includes(lastField)) return error[lastField];

    return Object.values(error)[0];
  };

  return (
    <Paper style={{ margin: "100px", padding: "25px" }}>
      <Type variant="h3">Contact</Type>
      <br />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="name"
            label="name"
            onBlur={getName}
            placeholder="John Doe"
          />
        </div>

        <div>
          <TextField
            id="email"
            label="email"
            onBlur={getEmail}
            placeholder="john.d@example.com"
          />
        </div>

        <div>
          <TextField
            id="message"
            label="message"
            onBlur={getMessage}
            placeholder="I love your work!"
          />
        </div>
        <Type>{displayError()}</Type>
        <br />
        <Button onClick={submitForm}>Submit</Button>
      </Box>
    </Paper>
  );
}

export default Contact;
