import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Next Video Streaming is a premier platform that offers a wide variety of popular shows 
          from top streaming services like Prime Video, Netflix, and Disney Plus. We strive to 
          provide our users with a comprehensive and convenient viewing experience by aggregating 
          content from multiple sources into a single, easy-to-use platform.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to bring the best entertainment to your fingertips, offering competitive 
          pricing and a diverse catalog of shows. Whether you are looking for the latest hits or 
          timeless classics, Next Video Streaming has something for everyone.
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to continuously improving our service and expanding our content library 
          to meet the evolving needs and preferences of our audience. Thank you for choosing Next 
          Video Streaming as your go-to destination for top-quality entertainment.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
