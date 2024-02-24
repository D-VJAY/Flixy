import React from 'react'

import  '../assets/style.css/Videoplayer.css'
  import   { videop }  from './Playbutton'
import { video } from './searchButton'
const Videoplayer = () => {
  console.log(videop)
  return (
    <div className='Vouter'>
          <video controls autoPlay typeof='video/mp4' className='Vplayer'> 
           <source src={videop || video} ></source>   
          </video>        
              </div>

  )
}

export default Videoplayer
