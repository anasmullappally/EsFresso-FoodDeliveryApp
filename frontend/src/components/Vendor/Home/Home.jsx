import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../../../Pages/Vendor/Theme/Theme'
import Navbar from '../NavBar/Navbar';

function Home() {
  return (
    
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
      <Navbar/>
      </ThemeProvider>
    
  )
}

export default Home