import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

function Specialists() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Specialists
      </Typography>
      <Typography variant="h6" paragraph>
        We have highly qualified specialists in various medical fields. Here are some of the key specialties:
      </Typography>
      <Box>
        <Typography variant="body1">- Urologist</Typography>
        <Typography variant="body1">- Gynecologist</Typography>
        <Typography variant="body1">- Emergency Medicine</Typography>
        <Typography variant="body1">- Neurologist</Typography>
        <Typography variant="body1">- Cardiologist</Typography>
        <Typography variant="body1">- Orthopedic Surgeon</Typography>
      </Box>
      <Button variant="contained" href="/contact" sx={{ marginTop: 2 }}>
        Contact a Specialist
      </Button>
    </Container>
  );
}

export default Specialists;
