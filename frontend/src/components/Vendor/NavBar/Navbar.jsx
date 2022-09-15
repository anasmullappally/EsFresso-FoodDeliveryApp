import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../Models/AppBar';
import Toolbar from '../Models/Toolbar';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function Navbar() {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 1 }} />
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/premium-themes/onepirate/"
                        sx={{ fontSize: 24 }}
                    >
                        {'EsFresso'}
                    </Link>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            href="#"
                            sx={rightLink}
                        >
                            {'Sign In'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="#"
                            sx={{ ...rightLink, color: 'secondary.main' }}
                        >
                            {'Sign Up'}
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
}

export default Navbar;