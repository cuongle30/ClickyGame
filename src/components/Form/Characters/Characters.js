import React from 'react'
import './Characters.css'

// pass the image into each card so all 12 are rendered
const Characters = props => (
  <div className='card' onClick={props.imageClick}>
    <div className='img-container'>
      <img className='image' alt={props.image.replace('.jpg', '')} src={props.image} />
    </div>
  </div>
)

export default Characters
