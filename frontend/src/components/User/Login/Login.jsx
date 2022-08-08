import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './login.css'
import GoogleLogin from 'react-google-login'
import { GOOGLE_CLIENT_ID, serverURL } from '../../../config'
import axios from 'axios'
import OTPInput, { ResendOTP } from "otp-input-react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from '../../../validation/useSingUp'
import { gapi } from 'gapi-script'

function Login(props) {
  const [OTP, setOTP] = useState("");
  const [open, setOpen] = useState(true);
  const [showOtp, setShowOtp] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signupSchema),
  })
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        GOOGLE_CLIENT_ID,
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
    const res = await axios({
      method: 'post',
      url: `${serverURL}/googleSignIn`,
      data: {
        token: googleData.tokenId
      }
    })
    if (res) {
      handleClose()
      props.setLogin(true)
      localStorage.setItem('login', true)
    }
  }
  const submitForm =  (data) => {
    try {
      console.log(data);

    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Dialog className='FormContaier' open={open} maxWidth={'xs'} onClose={handleClose}>
        <DialogTitle>Signin</DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent >

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
            <TextField className='inputField'
              id="outlined-multiline-flexible"
              maxRows={4}
              margin="dense"
              label="Email"
              type="email"
              name='email'
              fullWidth
              {...register('email')}
            />
            <div className="signInButton">
              <Button type='submit' variant='contained'>Send OTP</Button>
              
            </div>
            {showOtp && <div className="otpForm">
              <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
              <ResendOTP className='resendOtp' onResendClick={() => console.log('resend')} />
              <div className="signInButton">
                <Button  >REGISTER</Button>
              </div>
            </div>}
            <div className="orContainer">
              <p>OR</p>
            </div>
            <div className="googleAuth">
              <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText='Sign In With Google'
                onSuccess={handleSignIn}
                onFailure={handleFailure}
                cookiePolicy='single_host_origin'
                className='googleButton'
              ></GoogleLogin>
            </div>

          </DialogContent>
        </form>
      </Dialog>
    </div>
  )
}

export default Login