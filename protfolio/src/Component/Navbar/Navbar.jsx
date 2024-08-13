import React from 'react'
import  { Link }  from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className="nav">
     <ul className="ul">
      <li>
      <Link to='home' className="link"> Home</Link>
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
 
