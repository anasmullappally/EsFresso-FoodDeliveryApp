import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './login.css'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import OTPInput, { ResendOTP } from "otp-input-react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { signInSchema } from '../../../validation/useSingUp'
import { gapi } from 'gapi-script'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login(props) {
  const [OTP, setOTP] = useState("");
  const [open, setOpen] = useState(true);
  const [showOtp, setShowOtp] = useState(false)
  const [userData, setUserData] = useState('')
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  })
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
       process.env.REACT_APP_GOOGLE_CLIENT_ID,
      plugin_name: "chat",
    });
  });
  const handleClose = () => {
    setOpen(false);
    props.onChange()
  };
  const handleFailure = (result) => {
    // alert(result)
    console.log(result);
  }
  const handleSignIn = async (googleData) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_serverURL}/googleSignIn`,
        data: {
          token: googleData.tokenId
        }
      })
      if (res) {
        toast.success('Sign-In success')
        handleClose()
        props.setLogin(true)
        localStorage.setItem('login', true)
      }
    } catch (error) {

    }
  }
  const loginData = async (data) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_serverURL}/signIn`,
        data: data
      })
      if (res.status === 200) {
        setUserData(data.phoneNumber)
        toast.success('OTP Sent Successfully')
        setShowOtp(true)
      }
    } catch (err) {
      if (err.response.status === 409) {
        toast.error('No data Found, Please Register ')
      }
    }
  }
  const verifySignIn = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_serverURL}/verifySignin`,
        data: {
         otp : OTP,
         phoneNumber: userData
        }
      })
      if (res.status === 200) {
        toast.success('Sign-In Success')
        handleClose()
        props.setLogin(true)
        localStorage.setItem('login', true)
      }
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('Invalid OTP')
      }
    }
  }
  return (
    <div>

      <Dialog className='FormContaier' open={open} maxWidth={'xs'} onClose={handleClose}>
        <DialogTitle>Signin</DialogTitle>
        <DialogContent >
          <form onSubmit={handleSubmit(loginData)}>
            <TextField className='inputField'
              id="outlined-multiline-flexible"
              maxRows={4}
              margin="dense"
              label="Phone Number"
              type="number"
              name='phoneNumber'
              fullWidth
              {...register('phoneNumber')}
            />
            <p className='errorMessage'>{formState.errors.phoneNumber?.message}</p>
            <div className="signInButton">
              {!showOtp && <Button type='submit' variant='contained'>Send OTP</Button>}
            </div>
          </form>
          {showOtp && <div className="otpForm">
            <form onSubmit={handleSubmit(verifySignIn)}>
              <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
              <ResendOTP className='resendOtp' onResendClick={() => console.log('resend')} />
              <div className="signInButton">
                <Button type='submit' >REGISTER</Button>
              </div>
            </form>
          </div>}

          <div className="orContainer">
            <p>OR</p>
          </div>
          <div className="googleAuth">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText='Sign In With Google'
              onSuccess={handleSignIn}
              onFailure={handleFailure}
              cookiePolicy='single_host_origin'
              className='googleButton'
            ></GoogleLogin>
          </div>

        </DialogContent>

      </Dialog>
    </div>
  )
}

export default Login