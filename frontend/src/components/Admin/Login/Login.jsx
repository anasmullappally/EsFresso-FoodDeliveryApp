import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { adminSignInSchema } from '../../../validation/useSingUp'
import axios from 'axios';
import { adminURL } from '../../../config';

function Login() {
    const theme = createTheme();
    const [error, setError] = useState('')
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(adminSignInSchema),
    })
    const adminSignIn = async (data, e) => {
        e.preventDefault()
        console.log(data);
        try {
            const res = await axios({
                method: 'post',
                url: `${adminURL}/signIn`,
                data: data
            })
            console.log(res);
            if (res.status === 200) {
                console.log('success');
            }
        } catch (error) {
            console.log(error);
            if (error.response.status === 401) {
                setError('incorrect mail')
            } else if (error.response.status === 403) {
                setError('incorrect password ')
            }
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        ADMIN LOGIN
                    </Typography>
                    <Box noValidate sx={{ mt: 1 }}>
                        <p className='errorMessage '>{formState.errors.email?.message}</p>
                        <p className='errorMessage '>{formState.errors.password?.message}</p>
                        {error && <p className='errorMessage '>{error}</p>}
                        <form onSubmit={handleSubmit(adminSignIn)}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                {...register('email')}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register('password')}

                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}

                            >
                                Sign In
                            </Button>
                        </form>
                    </Box>
                </Box>


            </Container>
        </ThemeProvider>
    )
}

export default Login