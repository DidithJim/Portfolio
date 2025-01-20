import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Hero() {
    return (
        <div className="hero">
            <div className='hero__container'>
                <p className='hero__text'>
                    hey! I'm Didith <br /> 
                    I'm a full stack developer <br /> 
                    and a ux/ui designer
                </p>
            </div>
            
            <div className="hero__info">
                <ul className="hero__list">
                    <li className="hero__item">
                        <Link to="/projects" className="hero__link">projects</Link>
                    </li>
                    <li className="hero__item">
                        <Link to="/about" className="hero__link">about me</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;