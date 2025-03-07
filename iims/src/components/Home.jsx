import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
 
function Home() {
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to IIMS - Indian Institute of Medical Sciences
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Typography variant="h6">
          Our team of specialists is here to provide world-class medical care. We offer a wide range of services for your health needs.
        </Typography>
      )}
      <Button variant="contained" href="/services" sx={{ marginTop: 2 }}>
        Learn More About Our Services
      </Button>
    </Container>
  );
}
 
export default Home;