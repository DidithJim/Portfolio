import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4'

function Header() {
    const [language, setLanguage] = useState('EN');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'ES' : 'EN');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        const menu = document.querySelector('.menu');
        const hero = document.querySelector('.hero');
        
        if (isMenuOpen) {
            menu.classList.remove('active');
            hero.classList.remove('hidden');
        } else {
            menu.classList.add('active');
            hero.classList.add('hidden');
        }
    };

    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__container'>
                    <Link to="/">
                        <img className='header__logo' src="/img/logo-portfolio.png" alt="DidithJim Logo" />
                    </Link>
                    
                    <div className='header__right-items'>
                        <button className='header__lang-btn' onClick={toggleLanguage}>
                            {language}
                        </button>
                        <div className='header__menu-btn'>
                            <UseAnimations
                                animation={menu4}
                                size={40}
                                onClick={toggleMenu}
                                reverse={isMenuOpen}
                                speed={1.5}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="menu">
                <ul className="menu__list">
                    <li><Link to="/"><span className='number'>01</span> HOME</Link></li>
                    <li><Link to="/projects"><span className='number'>02</span> PROJECTS</Link></li>
                    <li><Link to="/about"><span className='number'>03</span> ABOUT</Link></li>
                    <li><Link to="/contact"><span className='number'>04</span> CONTACT</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header