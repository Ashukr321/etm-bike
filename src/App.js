import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Navbar} from './components'
const App = () => {
  return (
    <>
        <Router>
         {/* navbar */}
         <Navbar/>
          <Routes>
            {/* hero */}
            {/* features */}
            {/* counterup */}
            {/*  ṣervices*/}
            {/* product */}
            {/* our ṭeams */}
            {/* connect */}
            {/* our client */}
            {/* footer */}
           <Route/>
          </Routes>
        </Router>
    </>

    
  )
}

export default App