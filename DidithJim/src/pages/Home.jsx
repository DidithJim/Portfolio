import React from 'react'
import '../styles/home.css'
import Header from '../components/Header'
import Hero from '../components/Hero'

function Home() {
    return(
        <div className='home__page'>
        <Header />  
        <Hero />
        </div>
    )
}

export default Home;
