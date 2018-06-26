import React from 'react';
import './MusicEntry.css'

const MusicEntry = (props) => {
  return (
    <div className='entry'>
      <p className='pos'>{props.pos}</p>
      <img src={props.song['im:image'][2].label} alt={`${props.song['im:name'].label} artwork`}/>
      <div className='details'>
        <h3>{props.song['im:name'].label}</h3>
        <h5>{props.song['im:artist'].label}</h5>
      </div>
    </div>
  )
}

export default MusicEntry;
