import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#1a75ff" fontWeight="600" fontSize="35px">Body Sculpting Studio</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '39px', xs: '34px' , color :'#4db8ff'} }} mb="20px" mt="39px">
    'If you think lifting is dangerous, try being weak. <br />
    Being weak is dangerous'
    </Typography>
    <Typography fontSize="25px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '180px', textAlign: 'center', background: '#66c2ff', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Bestc Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;