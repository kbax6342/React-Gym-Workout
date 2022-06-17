import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'
//this the functionality for a loading spinner imported from the react library
function Loader() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
         <InfinitySpin color="grey" />
    </Stack>
  )
}

export default Loader