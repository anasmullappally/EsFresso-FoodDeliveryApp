import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';

export default function AddressForm() {
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom mb={3}>
        Restaurant Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            required
            id="restaurantName"
            name="restaurantName"
            label="Restaurant Name "
            fullWidth
            autoComplete="restaurantName"
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="shipping address-line"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="Phone Number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phoneNumber2"
            name="phoneNumber2"
            label="Phone Number 2"
            fullWidth
            autoComplete="Phone Number 2"
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}

      </Grid>
      <Typography variant="h6" gutterBottom mt={5} mb={3}>
        Restaurant Owner Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <TextField
            id="ownerPhoneNumber"
            name="ownerPhoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="ownerPhoneNumber"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ownerName"
            name="ownerName"
            label="Owner Name"
            fullWidth
            autoComplete="Name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ownerEmail"
            name="ownerEmail"
            label="Email"
            fullWidth
            autoComplete="ownerEmail"
            variant="outlined"
          />
        </Grid>
      </Grid>

    </React.Fragment>
  );
}