import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          We value your feedback and are here to assist you with any questions or concerns you may have. 
          Please use the form below to get in touch with us.
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            margin="normal"
            id="name"
            label="Name"
            variant="outlined"
            placeholder="Enter your name"
          />
          <TextField
            fullWidth
            margin="normal"
            id="email"
            label="Email address"
            type="email"
            variant="outlined"
            placeholder="Enter your email"
          />
          <TextField
            fullWidth
            margin="normal"
            id="message"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            placeholder="Enter your message"
          />
          <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
