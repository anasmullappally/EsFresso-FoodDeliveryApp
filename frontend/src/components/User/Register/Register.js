import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './register.css'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
import { GOOGLE_CLIENT_ID, serverURL } from '../../../config'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { signupSchema } from '../../../validation/useSingUp'
import OTPInput, { ResendOTP } from "otp-input-react";

function Register(props) {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        GOOGLE_CLIENT_ID,
      plugin_name: "chat",
    });
  });
  const [open, setOpen] = useState(true);
  const [userExist, setUserExist] = useState(false)
  const [showOtp, setShowOtp] = useState(false)
  const [OTP, setOTP] = useState("");
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signupSchema),
  })
  const handleClose = () => {
    setOpen(false);
    props.onChange()
  }
  const handleFailure = (result) => {
    // alert(result)
    console.log(result);
  }


  const handleRegister = async (googleData) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${serverURL}/googleSignUp`,
        data: {
          token: googleData.tokenId
        }
      })
      if (res) {
        handleClose()
        props.setLogin(true)
        localStorage.setItem('login', true)
      }

    } catch (err) {
      handleClose();
      localStorage.setItem('login', true);
      props.setLogin(true);
    }
  }

  const submitForm = async (data) => {
    try {
      const res = await axios({
        method: 'post',
        url: `${serverURL}/otpRequest`,
        data: data
      })
      if (res.status === 200) {
        setUserExist(false)
        setShowOtp(true)
      }
    } catch (err) {
      if (err.response.status === 409) {
        setUserExist(true)
      }

    }

  }

  return (
    <div>
      <Dialog className='FormContaier' open={open} maxWidth={'xs'} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>
        <form onSubmit={handleSubmit(submitForm)}>
          <DialogContent >
            <TextField className='inputField'
              id="outlined-multiline-flexible"
              maxRows={4}
              margin="dense"
              label="Name"
              name='name'
              type="text"
              fullWidth
              {...register('name')}
            />
            <p className='errorMessage'>{formState.errors.name?.message}</p>
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
            <p className='errorMessage'>{formState.errors.email?.message}</p>
            <TextField className='inputField'
              id="outlined-multiline-flexible"
              maxRows={4}
              margin="dense"
              label="Phone number"
              type="number"
              name='phoneNumber'
              fullWidth
              {...register('phoneNumber')}
            />
            {userExist && <p className='errorMessage'>User Already Exist</p>}
            <p className='errorMessage'>{formState.errors.phoneNumber?.message}</p>
            <div className="signInButton">
              {!showOtp && <Button type='submit'>Send OTP</Button>}
            </div>

            {showOtp && <div className="otpForm">
              <OTPInput value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
              <ResendOTP className='resendOtp' onResendClick={() => { handleSubmit(submitForm) }} />
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

                buttonText='Log in with Google'
                onSuccess={handleRegister}
                onFailure={handleFailure}
                cookiePolicy='single_host_origin'
                className='googleButton'
              ></GoogleLogin>
            </div>

          </DialogContent>
        </form>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Register