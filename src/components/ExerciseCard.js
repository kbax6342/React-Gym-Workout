import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'
//to display a gif use the img tag when using the api
function ExerciseCard({ exercise }) {
  return (
    // The Link tag links to page for each exercise
    //using dot notation to traverse the data to print out values using react 
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
        <Stack direction="row">
            <Button sx={{ ml: '21px', color: '#000', background: '#98DE91', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ ml: '21px', color: '#000', background: '#98DE91', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography ml="21px" color='#000' fontWeight="bold" mt='11px' pb='10px' textTransform='capitalize'>
            {exercise.name}
        </Typography>
    </Link>
    
  )
}

export default ExerciseCard