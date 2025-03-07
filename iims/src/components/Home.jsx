import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, CircularProgress, Grid, Card, CardContent, CardMedia } from '@mui/material';

function Home() {
  const [loading, setLoading] = useState(true);

  // Doctor data
  const doctors = [
    {
      name: "Dr.Sravya",
      specialization: "Cardiologist",
      image: "sravya.webp",
    },
    {
      name: "Dr.Rayudu",
      specialization: "Neurologist",
      image: "rayudu.jfif",
    },
    {
      name: "Dr.Nehan",
      specialization: "Orthopedic Surgeon",
      image: "nehan.jfif",
    },
    {
      name: "Dr.Shiny",
      specialization: "Gynacologist",
      image: "shiny.jfif",
    },
  ];

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

      {/* Doctors Section */}
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h5" gutterBottom>
          Meet Our Experts
        </Typography>
        <Grid container spacing={4}>
          {doctors.map((doctor, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={`Dr. ${doctor.name}`}
                  height="500"
                  image={doctor.image}
                />
                <CardContent>
                  <Typography variant="h6">{doctor.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {doctor.specialization}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default Home;
