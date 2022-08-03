import React ,{ useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './register.css'
import GoogleLogin from 'react-google-login'
import { useCookies } from 'react-cookie'
import { gapi } from 'gapi-script'
import {GOOGLE_CLIENT_ID , serverURL} from '../../../config'
import axios from 'axios'


function Register(props) {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
      GOOGLE_CLIENT_ID,
      plugin_name: "chat",
    });
  });
  const [registerData , setRegisterData] =useState( )
  const [open, setOpen] = useState(true);
  const [cookies, setCookies] = useCookies()
  const handleClose = () => {
    setOpen(false);
    props.onChange()
  };
  const [signupData , setSignupData] = useState(
    cookies.signupData ? cookies.signupData : null
)
  const handleFailure = (result) => {
    alert(result)
    console.log(result);
  }

  const handleRegister = async (googleData) => {
    const res =await axios ({
      method:'post',
      url:`${serverURL}/googleSignUp`,
      data: {
        token : googleData.tokenId
      }
    })
    setSignupData(res)
       if(res) {
        handleClose()
       }
  }
  return (
    <div>
      <Dialog className='FormContaier' open={open} maxWidth={'xs'} onClose={handleClose}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent >
          <TextField className='inputField'
            id="outlined-multiline-flexible"
            maxRows={4}
            margin="dense"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField className='inputField'
            id="outlined-multiline-flexible"
            maxRows={4}
            margin="dense"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField className='inputField'
            id="outlined-multiline-flexible"
            maxRows={4}
            margin="dense"
            label="Phone number"
            type="number"
            fullWidth
          />
          <div className="signInButton">
            <Button >Send OTP</Button>
          </div>
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