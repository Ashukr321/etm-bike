import { Paper, Stack, Typography, TextField, Button } from '@mui/material';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Enquiry = () => {
  useEffect(()=>{
    Aos.init();
  })
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");

  const formHandler = (e) => {
    e.preventDefault();
    alert(`${fName} ${lName} ${message} ${email}`);
    setfName("");
    setlName("");
    setMessage("");
    setEmail("");
  };

  return (
    <Stack p={6} justifyContent="center" alignItems="center" >
      <Paper elevation={3} sx={{ padding: "10px", width: "100%" }} data-aos="zoom-in">
        <Typography variant="h4" letterSpacing={".1em"} fontWeight="bold" textAlign="center" color="initial">
          Contact Us
        </Typography>
        <form style={{ padding: "2rem" }} onSubmit={formHandler}>
          <TextField
            id="fname"
            sx={{ width: "100%", marginBottom: "1rem" }}
            label="FirstName"
            value={fName}
            required
            type="text"
            onChange={(e) => {
              setfName(e.target.value);
            }}
          />
          <TextField
            id="lname"
            sx={{ width: "100%", marginBottom: "1rem" }}
            label="LastName"
            value={lName}
            required
            type="text"
            onChange={(e) => {
              setlName(e.target.value);
            }}
          />
          <TextField
            id="email"
            sx={{ width: '100%', marginBottom: "1rem" }}
            label="Email"
            value={email}
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            id="message"
            sx={{ width: "100%", marginBottom: "1rem" }}
            label="Message"
            value={message}
            rows={4}
            multiline
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button type="submit" variant="contained" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Stack>
  );
};

export default Enquiry;
