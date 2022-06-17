import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'


import RightArrowIcon from '../assets/icons/40-green-icon-2.png';
import LeftArrowIcon from '../assets/icons/40-green-icon-1.png';
//accepts the data property

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

function HorizontalScrollBar ({ data , bodyPart, setBodyPart, isBodyParts }) {
  return (
    //.map is reacts version of a for loop, the are 3 key value pairs that pass along json data from the data being passed into the
    //function at the top of page. Data = Item. 
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow} >
        
        {data.map((item) => (
            <Box 
             key={item.id || item}
             itemId={item.id || item}
             title={item.id || item}
             m='0 40px'>
              {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
            </Box>
        )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar