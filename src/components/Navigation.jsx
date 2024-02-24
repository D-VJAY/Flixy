import React from 'react';
import '../assets/style.css/Navigation.css'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo-removebg-preview.png'


function Navigation() {
  return (
      <div className='navouter'>
       <nav className='navigation'>
         {/* following is the code for routing of web-pages
           i've used React-router-dom library which is an external library for Managing routing in React js
          */}
          <ul className='nav-inner'>
          <li className='nab' >
              <NavLink to="/" >
          <img src={logo} alt='Home' className='logo'></img>
            </NavLink>     
           </li>
           <li className='nab' >
              <NavLink to="/" >
            <button  className='link'>Home</button></NavLink>     
           </li>
            <li className='nab'>
              <NavLink to="/watchlater" > <button  className='link'>watchlater</button></NavLink>  
            </li>
            <li className='nab'>
              <NavLink to="/trending" > <button  className='link'>Trending</button></NavLink>  
            </li>
            </ul>
        </nav>
        </div>
  )
  
}
export default Navigation
