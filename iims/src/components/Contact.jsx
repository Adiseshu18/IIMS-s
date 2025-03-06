import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function Contact() {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your message: "${message}" has been sent to the hospital`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Message"
          fullWidth
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="submit">
          Send Message
        </Button>
      </form>
    </Container>
  );
}

export default Contact;
