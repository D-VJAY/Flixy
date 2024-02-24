import React from 'react'
import { NavLink } from 'react-router-dom'
import '../assets/style.css/SearchButton.css'
export let video;
const SearchButton = (props) => {

  function playit(){
    if(props.video === '' ){
          alert("Enter a valid Movie name")
    }else{

       console.log(video)  
      return video=`${props.video}`
    }
  }
  return (
    
    <div>
<ul>
    <li className='linky'>
        <NavLink to='/playit' onClick={playit} className="navlink"><button className='search' >  
          {props.name}
          </button>
          </NavLink>
    </li>
</ul>

    </div>
  )
}

export default SearchButton