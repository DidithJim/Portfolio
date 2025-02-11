import React, { useContext } from 'react'
import '../styles/home.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import { MenuContext } from '../components/MenuContext'


function Home() {
    const { language } = useContext(MenuContext);
    
    const translations = {
        EN: {
            hero__text: 'hey! I\'m Didith <br /> I\'m a full stack developer <br /> and a ux/ui designer',
            hero__link: 'projects',
            hero__link2: 'about me'
        },
        ES: {
            hero__text: '¡Hola! Soy Didith <br /> Soy desarrolladora full stack <br /> y diseñadora ux/ui',
            hero__link: 'proyectos',
            hero__link2: 'sobre mí'
        }
    }


    return(
        <div className='home__page'>
            <Header />  
            <Hero translations={translations} language={language} />
        </div>
    )
}

export default Home;
