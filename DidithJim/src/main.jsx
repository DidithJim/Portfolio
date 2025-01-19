import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import './styles/home.css'

ReactDOM.createRoot(document.getElementById('root')).render( 
     <Router>
       <Routes>
         <Route path="/" element={<Navigate to="/home" />} />
         <Route path="/home" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
       </Routes>
      </Router>
  
)
