import React from 'react';
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
                        <a href="/projects" title="projects" className="hero__link">projects</a>
                    </li>
                    <li className="hero__item">
                        <a href="/about" title="about me" className="hero__link">about me</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Hero;
