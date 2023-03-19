
import React from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Card = ({_id, name, prompt, photo}) => {

  

  return (
    <>
      <div className='featuredImg'>
     
          <LazyLoadImage src={photo}  effect='blur' alt="" loading='lazy' width={'100%'}  />
        <div className='featuredImg_prompt'>
          <h2>{prompt}</h2>
        </div>
      </div>


 
    </>
  )
}

export default Card;
