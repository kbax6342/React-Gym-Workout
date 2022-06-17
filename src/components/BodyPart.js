import React from 'react'
import {Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/40-green-icon-6.png'

function BodyPart({item, setBodyPart, bodyPart}) {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent='center'
    className='bodyPart-card  nunito'
    sx={{ borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
    }}
    onClick={() => {
        setBodyPart(item)
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' }) }}
    >
        <img src={Icon} alt='dumbell' />
        <Typography  fontSize="24px" fontWeight="bold"  color="#616161" textTransform="capitalize">
          {item}  
        </Typography>
    </Stack>
  )
}

export default BodyPart