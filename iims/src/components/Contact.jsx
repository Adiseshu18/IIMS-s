import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your message has been sent to the hospital. Details: ${JSON.stringify(formData)}`);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative', // to make the form appear on top of the background
      }}
    >
      {/* Background Logo */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/imms-logo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1, // Transparency for the logo
          zIndex: -1, // Ensure the logo stays behind the form
        }}
      />

      {/* Contact Form */}
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          zIndex: 1,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Contact Us
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Phone Number"
            fullWidth
            variant="outlined"
            name="number"
            value={formData.number}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Email Address"
            fullWidth
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Address"
            fullWidth
            variant="outlined"
            name="address"
            value={formData.address}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Your Message"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
}

export default Contact;
