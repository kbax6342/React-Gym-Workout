import React from 'react'
import { Link } from 'react-router-dom'
import { Stack} from '@mui/material'

import Logo from '../assets/images/200-Logo-Small.png'

console.log(Logo)

function NavBar() {
  return (
    //This is used with materiel ui to create navigation
    <Stack className='nunito-500' direction='row' justifyContent='space-around' sx={{gap: {sm: '122px', xs: '40px'}, mt:{sm:'32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>
        <Link to='/'>
            <img src={Logo} atl="company logo" style={{width: '48px', height: '48px' , margin:'0 20px'}}/>
        </Link>
         <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link to="/" style={{textDecoration: 'none', color: '#69A88E', borderBottom: '3px solid #ffcc53'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none' , color: '#69A88E'}}>
            Exercises
        </a>
        </Stack>
    </Stack>
   
  )
}

export default NavBar