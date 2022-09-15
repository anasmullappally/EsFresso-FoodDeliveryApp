import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function TypeAndTiming() {
    const [value, setValue] = React.useState(dayjs('2018-01-01T00:00:00.000Z'));
    const [hoteltype, setHoteltype] = React.useState('');

    const handleChange = (event) => {
        setHoteltype(event.target.value);
    };

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Restaurant Type
            </Typography>
            <Box sx={{ minWidth: 120 }} mt={1}>
                <FormControl fullWidth>
                    <InputLabel >Type</InputLabel>
                    <Select
                        id="hotelType"
                        value={hoteltype}
                        label="Type"
                        onChange={handleChange}
                    >
                        <MenuItem value={'vegetarian'}>Vegetarian</MenuItem>
                        <MenuItem value={'non-vegetarian'}>Non-Vegetarian</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Typography variant="h6" mt={2} mb={2} gutterBottom>
                Opening hours
            </Typography>
            <Grid container mb={2} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Grid item xs={12} md={6} mb={2} >
                        <TimePicker
                            label={'Opening'}
                            value={value}
                            onChange={setValue}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </Grid>

                    <Grid item xs={12} md={6} mb={2}>
                        <TimePicker
                            label={'Closing'}
                            value={value}
                            onChange={setValue}
                            renderInput={(params) => <TextField {...params} />}
                        />

                    </Grid>
                </LocalizationProvider>
            </Grid>
            <Typography variant="h6" mt={2} mb={2} gutterBottom>
                Opening Days
            </Typography>
            {/* <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                
                
            </Grid> */}
            <FormControlLabel value={'sunday'} control={<Checkbox />} label="Sunday" />
            <FormControlLabel value={'monday'} control={<Checkbox />} label="Monday" />
            <FormControlLabel value={'tuesday'} control={<Checkbox />} label="Tuesday" />
            <FormControlLabel value={'wednesday'} control={<Checkbox />} label="Wednesday" />
            <FormControlLabel value={'thursday'} control={<Checkbox />} label="Thursday" />
            <FormControlLabel value={'friday'} control={<Checkbox />} label="Friday  " />
            <FormControlLabel value={'saturday'} control={<Checkbox />} label="Saturday" />

        </React.Fragment>
    );
}