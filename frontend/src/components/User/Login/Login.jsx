import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './login.css'
import GoogleLogin from 'react-google-login'
import { GOOGLE_CLIENT_ID, serverURL } from '../../../config'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function Login(props) {
  const [open, setOpen] = useState(true);
  const [cookies, setCookies] = useCookies()
  const [loginData, setLoginData] = useState(
    cookies.loginData ? cookies.loginData : null
  )


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
    setLoginData(res)
    if (res) {
      handleClose()
    }
    setCookies('LoginData', res, { path: '/' })
  }


  return (
    <div>
      <Dialog className='FormContaier' open={open} maxWidth={'xs'} onClose={handleClose}>
        <DialogTitle>Signin</DialogTitle>
        <DialogContent >
          <TextField className='inputField'
            id="outlined-multiline-flexible"
            maxRows={4}
            margin="dense"
            label="Phone number"
            type="number"
            fullWidth
          />
          <div className="signInButton">
            <Button variant='contained'>Send OTP</Button>
          </div>
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
            ></GoogleLogin>
          </div>

        </DialogContent>
        <DialogActions>

        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Login