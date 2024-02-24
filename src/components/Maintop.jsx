import React from 'react'
import '../assets/style.css/Maintop.css'
import Searchbar from './Searchbar'
 import Background from '../images/bg_1.png'

export default function Maintop() {
   
  return (
    <div className='top '>
     
   <div className='image '>
 
   <img src={Background} alt='gg' className='background'></img> 
   </div>
   <div className='boxy'>
      <Searchbar/>
   </div>
   
    </div>
  )
}

