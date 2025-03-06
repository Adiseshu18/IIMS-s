import React from 'react';
import { Container, Typography } from '@mui/material';

function About() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About IIMS
      </Typography>
      <Typography variant="body1" paragraph>
        IIMS is a leading hospital committed to providing top-quality healthcare services. Our hospital offers specialized care in a wide range of medical disciplines and is equipped with state-of-the-art technology. Our doctors are dedicated to ensuring the well-being of every patient.
      </Typography>
    </Container>
  );
}

export default About;
