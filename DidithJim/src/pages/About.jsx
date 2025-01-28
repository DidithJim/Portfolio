import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import '../styles/about.css'

function About() {
    return(
        <div className='about__page'>
           <Header/>
           <AboutMe/>
        </div>
    )
}

export default About;   