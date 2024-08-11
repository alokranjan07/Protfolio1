import React from 'react'
import  { Link }  from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
     
      <Link to='home'> Home</Link>
      <Link to='protfolio'>Protfolio</Link>
      <Link to='about'>About</Link>
      <Link to='education'>Education</Link>
      
      

    </div>
  )
}

export default Navbar
 
