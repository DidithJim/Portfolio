import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import menuAnimation from '../assets/animation.json'
import { MenuContext } from '../components/MenuContext'

function Header() {
    const { language, toggleLanguage } = useContext(MenuContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = React.useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (menuRef.current) {
            if (!isMenuOpen) {
                menuRef.current.setDirection(1);
                menuRef.current.playSegments([0, 60], true);
            } else {
                menuRef.current.setDirection(-1);
                menuRef.current.playSegments([60, 0], true);
            }
        }
        const menu = document.querySelector('.menu');
        const hero = document.querySelector('.hero');
        const projectContainer = document.querySelector('.project__container');
        const aboutContainer = document.querySelector('.about__container');
        const contactContainer = document.querySelector('.contact__container');
       
        if (isMenuOpen) {
            menu.classList.remove('active');
            if (hero) hero.classList.remove('hidden');
            if (projectContainer) projectContainer.classList.remove('hidden');
            if (aboutContainer) aboutContainer.classList.remove('hidden');
            if (contactContainer) contactContainer.classList.remove('hidden');
        } else {
            menu.classList.add('active');
            if (hero) hero.classList.add('hidden');
            if (projectContainer) projectContainer.classList.add('hidden');
            if (aboutContainer) aboutContainer.classList.add('hidden');
            if (contactContainer) contactContainer.classList.add('hidden');
        }
    };

    return (
        <header className='header'>
            <nav className='header__nav'>
                <div className='header__container'>
                    <Link to="/">
                        <img className='header__logo' src="/img/logo-porfolio.png" alt="DidithJim Logo" />
                    </Link>
                   
                    <div className='header__right-items'>
                        <button className='header__lang-btn' onClick={toggleLanguage}>
                            {language}
                        </button>
                        <div className='header__menu-btn' onClick={toggleMenu}>
                            <Lottie
                                lottieRef={menuRef}
                                animationData={menuAnimation}
                                loop={false}
                                autoplay={false}
                                style={{ 
                                    width: 120,
                                    height: 120,
                                    padding: 0,
                                    cursor: 'pointer',
                                }}
                                initialSegment={[0, 30]}
                                speed={1.5}
                            />
                        </div>
                    </div>
                </div>
            </nav>

            <div className="menu">
                <ul className="menu__list">
                    <li><Link to="/"><span className='number'>01</span> {language === 'EN' ? 'HOME' : 'INICIO'}</Link></li>
                    <li><Link to="/projects"><span className='number'>02</span> {language === 'EN' ? 'PROJECTS' : 'PROYECTOS'}</Link></li>
                    <li><Link to="/about"><span className='number'>03</span> {language === 'EN' ? 'ABOUT' : 'SOBRE MÍ'}</Link></li>
                    <li><Link to="/contact"><span className='number'>04</span> {language === 'EN' ? 'CONTACT' : 'CONTACTO'}</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
