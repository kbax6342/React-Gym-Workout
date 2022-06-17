import React from 'react'
import { Box, Stack, Typography} from '@mui/material'

import Logo from '../assets/images/200-Logo-Long.png'

function Footer() {
  return (
    <Box mt='80px' bgColor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px"  height="40px"/>
      </Stack>
      <Typography className="center" variant="h5" pb="40px" mt="20px">
        Made By BA Tech
      </Typography>
    </Box>
  )
}

export default Footer