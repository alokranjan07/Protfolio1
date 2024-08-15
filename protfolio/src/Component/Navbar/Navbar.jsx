import React from 'react'
import  { Link }  from 'react-router-dom'
import './Navbar.css'
import Alok from '/src/assets/Alok.png'
function Navbar() {
  return (
    <div className="nav">
    <div className="logo" >
    <img src={Alok} alt="logo" id="logo"/>

      </div>
     <ul className="ul">
      <li>
      <Link to='/' className="link"> Home</Link>
      </li>
      <li>

      <Link to='protfolio' className="link">Protfolio</Link>
      </li>
      <li>
      <Link to='about' className="link">About</Link>
      </li>
      <li>
      <Link to='education' className="link">Education</Link>
      </li>
      
      </ul>

    </div>
  )
}

export default Navbar
 
