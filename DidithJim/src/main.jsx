import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { MenuProvider } from './components/MenuContext'
import 'kursor/dist/kursor.css'
import Kursor from 'kursor/dist/kursor'  
import './styles/home.css'

new Kursor({
    type: 1,  
    removeDefaultCursor: true,
    color: '#000000'  
})

  ReactDOM.createRoot(document.getElementById('root')).render( 
    <React.StrictMode>
        <MenuProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </MenuProvider>
    </React.StrictMode>
)
