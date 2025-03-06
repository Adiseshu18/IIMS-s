import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

function Services() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="h6" paragraph>
        At IIMS, we offer a wide range of medical services to address your healthcare needs:
      </Typography>
      <Box>
        <Typography variant="body1">- General Medicine</Typography>
        <Typography variant="body1">- Surgery</Typography>
        <Typography variant="body1">- Pediatric Care</Typography>
        <Typography variant="body1">- Cardiology</Typography>
        <Typography variant="body1">- Orthopedics</Typography>
      </Box>
      <Button variant="contained" href="/contact" sx={{ marginTop: 2 }}>
        Contact a Doctor
      </Button>
    </Container>
  );
}

export default Services;
