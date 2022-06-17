import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.png'

function HeroBanner() {
  return (
   <Box  className='nunito' sx={{mt: {lg: '212px', xs: '70px'}, ml: {sm: '50px'}}} position='relative' p='20px' >
    <Typography fontWeight="600" fontSize="26px" color='#69A88E'>
        Fitness Club
    </Typography>
    <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='23px'>
        Sweat, Smile <br /> and Repeat
    </Typography>
    <Typography fontSize='22px' lineHeight='35px' mb={4}>
       Check out the most effective exercises.
    </Typography>
    <Button variant='contained' color="success" href='#exercises' sx={{padding: '10px' }}>Explore Exercise</Button>
    <Typography fontWeight={600} color='#69A88E
' sx={{opacity: 0.1, display: {lg: 'block', xs: 'none'}}} fontSize='200px'>
        Exercise
    </Typography>
   
    <img className='hero-banner-img' src={HeroBannerImage} alt="banner" />
   </Box>

  )
}

export default HeroBanner