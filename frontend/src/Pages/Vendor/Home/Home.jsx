import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../Theme/Theme';
import Navbar from '../../../components/Vendor/NavBar/Navbar';
import Banner from '../../../components/Vendor/Banner/Banner';
function VendorHome() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Banner/>
        </ThemeProvider>
    )
}

export default VendorHome