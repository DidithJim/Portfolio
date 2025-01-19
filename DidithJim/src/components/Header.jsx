import React, { useState } from 'react'
import UseAnimations from 'react-useanimations';
import menu4 from 'react-useanimations/lib/menu4'
import '../styles/home.css'

function Header() {
    const [language, setLanguage] = useState('EN');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'ES' : 'EN');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__container'>
                    <img className='header__logo' src="/img/logo-portfolio.png" alt="DidithJim Logo" />
                    
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
                                strokeColor="#000000"
                                speed={1.5}
                            />
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header