import React, { useContext } from 'react'
import { MenuContext } from '../components/MenuContext'
import '../styles/about.css'

function AboutMe() {
    const { language } = useContext(MenuContext);

    const translations = {
        EN: {
            title: "About",
            me: "me",
            description: "Hello! I'm Judith Ríos, a 23-year-old Full Stack Developer and UX/UI Designer passionate about creating comprehensive digital solutions. Having completed my Master's degree at CEI: Centro de Estudios e Innovación in 2025, I combine technical expertise in both front-end and back-end development with a keen eye for user-centered design. I specialize in crafting efficient, responsive, and visually appealing applications that deliver exceptional user experiences.",
            skills: "Skills",
            development: "Development",
            design: "Design",
            developmentSkills: [
                "HTML5", "CSS3", "JavaScript", "React.js", "Angular",
                "Vite.js", "Node.js", "Express", "PHP", "MongoDB", "SQL"
            ],
            designSkills: [
                "Figma", "UX Research", "Procreate"
            ]
        },
        ES: {
            title: "Sobre",
            me: "mí",
            description: "¡Hola! Soy Judith Ríos, una Desarrolladora Full Stack y Diseñadora UX/UI, tengo 23 años y me encanta crear soluciones digitales integrales. He completado mi Máster en CEI: Centro de Estudios e Innovación en 2025, combino experiencia técnica tanto en desarrollo front-end como back-end y tengo un ojo agudo para el diseño centrado en usuarios. Me especializo en crear aplicaciones eficientes, responsivas y visualmente atractivas que brindan experiencias de usuario excepcionales.",
            skills: "Skills",
            development: "Desarrollo",
            design: "Diseño",
            developmentSkills: [
                "HTML5", "CSS3", "JavaScript", "React.js", "Angular",
                "Vite.js", "Node.js", "Express", "PHP", "MongoDB", "SQL"
            ],
            designSkills: [
                "Figma", "UX Research", "Procreate"
            ]
        }
    };

    const text = translations[language];

    return (
        <main className='about__container'>
            <section className='about__section'>
                <h1 className='about__title'>{text.title} <span className="me">{text.me}</span></h1>
                <div className='about__description'>
                    <p className='about__text'>{text.description}</p>
                </div>
                <div className="skills">
                    <h2 className='skills__title'>{text.skills}</h2>
                    <div className="skills__container">
                        <div className="skills__category">
                            <h3 className="skills__subtitle">{text.development}</h3>
                            <div className="skills__list">
                                {text.developmentSkills.map((skill, index) => (
                                    <div key={index} className="skill__item">
                                        <span className="skill__name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="skills__category">
                            <h3 className="skills__subtitle">{text.design}</h3>
                            <div className="skills__list">
                                {text.designSkills.map((skill, index) => (
                                    <div key={index} className="skill__item">
                                        <span className="skill__name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutMe;
