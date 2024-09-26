import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"  
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div style={{width:"100vw"}}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
