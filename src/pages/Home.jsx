//Using React Hooks
import React , { useState } from 'react'
import {Box} from '@mui/material'


import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
//you can use the react context api instead of passing props to each component
//changes in these states are reflected throught the entire application
const Home = () => {
   
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    console.log(bodyPart)
  return (

<Box>
    <HeroBanner />
    <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises  setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
</Box>
  )
}

export default Home