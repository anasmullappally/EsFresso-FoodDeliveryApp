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
  const [registerData, setRegisterData] = useState('')
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
        url: `${serverURL}/googleSignIn`,
        data: {
          token: googleData.tokenId
        }
      })
      console.log(res);
      if (res) {
        handleClose()
        props.setLogin(true)
        localStorage.setItem('login', true)
      }

    } catch (err) {
      console.log(err);
    }
  }

  const submitForm = async (data) => {
    // console.log(data);
    setRegisterData(data)
    try {
      const res = await axios({
        method: 'post',
        url: `${serverURL}/otpRequest`,
        data: data
      })
      console.log(res);
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
  const verifyOtp = async () => {

    console.log(OTP);
    console.log(registerData);
    try {
      const res = await axios({
        method: 'post',
        url: `${serverURL}/otpVerify`,
        data: {
          otp: OTP,
          data: registerData
        }
      })
      console.log(res);

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Dialog className='FormContaier' open={open} maxWidth={'xs'} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>

        <DialogContent >
          <form onSubmit={handleSubmit(submitForm)}>
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
          </form>
          <form onSubmit={handleSubmit(verifyOtp)} >
            {showOtp && <div className="otpForm">
              <OTPInput name='otp' value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false} />
              <ResendOTP className='resendOtp' onResendClick={() => console.log('jfdhjk')} />
              <div className="signInButton">

                <Button type='submit' >REGISTER</Button>
              </div>
            </div>}
          </form>
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

        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Register