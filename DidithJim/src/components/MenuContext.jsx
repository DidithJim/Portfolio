import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [language, setLanguage] = useState('EN');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguage = () => {
        setLanguage(language === 'EN' ? 'ES' : 'EN');
    };

    return (
        <MenuContext.Provider value={{ 
            isMenuOpen, 
            toggleMenu, 
            language, 
            toggleLanguage 
        }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider;