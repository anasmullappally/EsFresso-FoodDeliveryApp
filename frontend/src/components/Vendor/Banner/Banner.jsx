import { Grid } from '@mui/material';
import * as React from 'react';
import Button from '../Models/Button';
import Typography from '../Models/Typography';
import ProductLayout from './ProductLayout';

const backgroundImage =
  'https://caterease.com/wp-content/uploads/2019/01/Final-Background-For-Login.png';

export default function Banner() {
  return (
    <ProductLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
       Welcome To EsFresso
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        EAT GOOD FEEL GOOD 
      </Typography>
      <Grid>
      <Button
        color="info"
        variant="outlined"
        size="medium"
        component="a"
        href=""
        sx={{ minWidth: 250 }}
      
      >
        REGISTER YOUR RESTAURANT
      </Button>
      <Button
        color="info"
        variant="outlined"
        size="medium"
        component="b"
        href=""
        sx={{ minWidth: 250 }}
        
      >
        ALREADY HAVE  AN ACCOUNT
      </Button>
      </Grid>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductLayout>
  );
}