import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Footer = () => (
  <Box mt="70px" bgcolor="#25beff">
    <Stack gap="30px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="30px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '175px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '25px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made by Arpitshivam</Typography>
  </Box>
);

export default Footer;