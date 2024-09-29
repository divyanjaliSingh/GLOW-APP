import React from 'react';
import googleLogo from '../assets/google-icon.png';
import appleLogo from '../assets/apple-icon.png';
import { Button, Grid, TextField, Typography } from '@mui/material';

const LoginPage = () => {
  return (
    <Grid container alignItems="center" justifyContent="center" sx={{ minHeight: '100vh', backgroundColor: '#F7F8FA', p: 2 }}>
      <Grid item xs={12} sm={8} md={4}>
        <Typography variant="h4" align="center" sx={{ mb: 3 }}>
          Sign Up
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
        />
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 2,
            py: 1,
            backgroundColor: '#1677FF',
            '&:hover': { backgroundColor: '#165DF1' },
          }}
        >
          Sign Up
        </Button>
        <Typography align="center" sx={{ mt: 2, fontSize: '0.875rem', color: '#666' }}>
          By signing up, you agree to our <span style={{ textDecoration: 'underline' }}>Terms of Service</span> and <span style={{ textDecoration: 'underline' }}>Privacy Policy</span>.
        </Typography>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<img src={googleLogo} alt="Google" style={{ width: '20px' }} />}
            >
              Continue with Google
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<img src={appleLogo} alt="Apple" style={{ width: '30px' }} />}
            >
              Continue with Apple
            </Button>
          </Grid>
        </Grid>
        <Typography align="center" sx={{ mt: 2 }}>
          Already have an account? <a href="/login" style={{ color: '#1677FF', textDecoration: 'none' }}>Sign In</a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

