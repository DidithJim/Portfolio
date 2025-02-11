import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Hero({ translations, language }) {
    const text = translations[language];
    
    return (
        <div className="hero">
            <div className='hero__container'>
                <p className='hero__text' 
                   dangerouslySetInnerHTML={{ __html: text.hero__text }}>
                </p>
            </div>
            
            <div className="hero__info">
                <ul className="hero__list">
                    <li className="hero__item">
                        <Link to="/projects" className="hero__link">{text.hero__link}</Link>
                    </li>
                    <li className="hero__item">
                        <Link to="/about" className="hero__link">{text.hero__link2}</Link>

                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;
