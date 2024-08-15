import React from 'react'
import './Home.css'
import Alok1 from '/src/assets/Alok1.jpg'
import Resume from '/src/assets/Resume.png'
import Linkdin from '/src/assets/Linkdin.webp'

function Home() {
  return (
    <> 
    <div className="home">
     
    
    <img src={Alok1} alt="img" id="img" />
    <h1 id="h1"> Alok ranjan ,Frontend developer from delhi </h1>
    <p id="para"> I am a passionate Front-End Developer dedicated to creating visually stunning and user-friendly web experiences.</p>
    <div className="bottom-connect">
     
    <div className="connect">
    <a href="https://www.linkedin.com/in/alok-ranjan-027000259/" target="blank">
       <img src={Linkdin} alt="connect" id="connect"/>
       </a>
    </div>
    <div  id="resume">
    
       <img src={Resume}  alt="img" id="resume"/>
       
    </div>
       
    </div>
    </div>
    </>
  )
}

export default Home
