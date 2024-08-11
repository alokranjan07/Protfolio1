import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from '/src/Component/Navbar/Navbar'
import Home from '/src/Component/Home/Home'
import Protfolio from '/src/Component/Protfolio/Protfolio'
import About from '/src/Component/About/About'
import Education from '/src/Component/Education/Education'
 

function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Routes>

          <Route path="/"  element={<Home/>}/>
          <Route path="/protfolio" element={<Protfolio/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/education" element={<Education/>}/>
           
          </Routes>
        </Router>
    </div>
  )
}

export default App
