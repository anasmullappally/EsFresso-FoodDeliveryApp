import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './login.css'



function Login(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    props.onChange()
  };
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
       
      </DialogContent>
      <DialogActions>
       
      </DialogActions>
    </Dialog>
    </div>
  )
}

export default Login