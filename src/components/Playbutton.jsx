import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/style.css/Playbutton.css'
export let videop;
const Playbutton = (props) => {

  function playit(){
   videop=`${props.video}`
        return console.log(videop)  
  }
  return (
    
    <div className='playpage'>
<ul>
    <li className='list'>
        <NavLink to='/playit'  onClick={playit} className='navlink'><button className='playbutton'>
          Play
          </button>
          </NavLink>
    </li>
</ul>

    </div>
  )
}

export default Playbutton
