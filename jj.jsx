import React from 'react';
import './Signup.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { gapi } from 'gapi-script';
import { GOOGLE_CLIENT_ID, SERVER_URL } from '../../../config';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../validationschema/SignupSchema';

function Signup(props) {
  const [open, setOpen] = React.useState(true);
  const [err, setErr] = React.useState('')
  const [openOtpModal, setOtpModal] = React.useState(false)
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClose = () => {
    setOpen(false);
    props.onChange();
  };

  const submitForm = async (data) => {
    try {
      await axios({
        url: `${SERVER_URL}/signup`,
        method: 'post',
        data: {
          data,
        },
 
      });
      handleClose()
      setOtpModal(true)
    } catch (err) {
      setErr('Please enter a valid Mobile number')
    }
  };

  // handle close otp modal

   let handleCloseOtpModal = () => setOtpModal(false)

  gapi.load('client:auth2', () => {
    gapi.client.init({
      clientId: GOOGLE_CLIENT_ID,
      plugin_name: 'chat',
    });
  });

  

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:2000/google_signup',
        data: {
          token: googleData.tokenId,
        },
      });

      if (res) {
        handleClose();
        props.setUserLogin(true);
        localStorage.setItem('login', true);
      }
    } catch (err) {
      handleClose();
      localStorage.setItem('login', true);
      props.setUserLogin(true);
    }
  };

  return (
    <div>
      <Dialog
        className="FormContaier"
        open={open}
        maxWidth={'xs'}
        onClose={handleClose}
      >
        <DialogTitle>Signup</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(submitForm)}>
            <TextField
              className="inputField"
              id="outlined-multiline-flexible"
              maxRows={4}
              label="Name"
              type="text"
              name="Name"
              fullWidth
              mt={4}
              {...register('Name')}
            />
            <p className="errorMessage">{formState.errors.Name?.message}</p>
            <TextField
              className="inputField"
              id="outlined-multiline-flexible"
              maxRows={4}
              margin="dense"
              label="Phone number"
              name="MobileNumber"
              type="number"
              fullWidth
              {...register('MobileNumber')}
            />
            <p className="errorMessage">
              {formState.errors.MobileNumber?.message}
            </p>
            <p className='erroMessage'>{err ? err : ''}</p>
            <TextField
              className="inputField"
              id="outlined-multiline-flexible"
              maxRows={4}
              margin="dense"
              label="Email"
              name="Email"
              type="email"
              fullWidth
              {...register('Email')}
            />
            <p className="errorMessage">{formState.errors.Email?.message}</p>
            <div className="signupButton">
              <Button type="submit" variant="contained">
                Send one time password
              </Button>
            </div>
          </form>

          <div className="orContainer">
            <p>or</p>
          </div>
          <div className="googleSignup">
            <GoogleLogin
              className="googleButton"
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Signup with Google"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy="single_host_origin"
            ></GoogleLogin>
          </div>
          <div className="goToGoogle">
            <p>
              Already have an account ?<span> Please login</span>
            </p>
          </div>
        </DialogContent>
      </Dialog>
      {/* openOtpModal && <OtpModal/> */}
    </div>
  );
}

export default Signup;