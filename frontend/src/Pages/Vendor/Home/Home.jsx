import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../Theme/Theme';
import Navbar from '../../../components/Vendor/NavBar/Navbar';
import Banner from '../../../components/Vendor/Banner/Banner';
import HowItWorks from '../../../components/Vendor/HowItWorks/HowItWorks';
function VendorHome() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Banner/>
            <HowItWorks/>
        </ThemeProvider>
    )
}

export default VendorHome