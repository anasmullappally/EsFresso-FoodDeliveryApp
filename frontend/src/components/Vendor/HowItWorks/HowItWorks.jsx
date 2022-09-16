import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '../Models/Button';
import Typography from '../Models/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function HowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="https://mui.com/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          How it works
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>STEP 1</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/3456/3456426.png"
                  alt="register"
                  sx={image}
                />
                <Typography variant="h6" align="center" >
                Register Restaurant
                </Typography>
                <Typography variant="h7" align="center" >
                Help users discover your place by creating a listing on EsFresso
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>STEP 2</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/3063/3063758.png"
                  alt="bike"
                  sx={image}
                />
                <Typography variant="h6" align="center">
                Register online order
                </Typography>
                <Typography variant="h7" align="center" >
                And deliver orders to millions of customers with ease
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box sx={number}>STEP 3</Box>
                <Box
                  component="img"
                  src="https://cdn-icons-png.flaticon.com/512/3081/3081371.png"
                  alt="clock"
                  sx={image}
                />
                 <Typography variant="h6" align="center">
                 Start Receiving Orders
                </Typography>
                <Typography variant="h7" align="center" >
                Manage orders on our partner app, web dashboard or API partners
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          component="a"
          href=""
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  );
}

export default HowItWorks;