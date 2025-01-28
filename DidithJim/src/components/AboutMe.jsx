import React from 'react'
import '../styles/about.css'

function AboutMe () {
    return (
        <main className='about__container'>
            <section className='about__section'>
                <h1 className='about__title'>About <span className="me"> me</span></h1>
                <div className='about__description'>
                    <p className='about__text'>
                        Hello! I'm Judith Ríos, a 23-year-old Full Stack Developer and UX/UI Designer passionate about creating comprehensive digital solutions. Having completed my Master's degree at CEI: Centro de Estudios e Innovación in 2025, I combine technical expertise in both front-end and back-end development with a keen eye for user-centered design. I specialize in crafting efficient, responsive, and visually appealing applications that deliver exceptional user experiences.
                    </p>
                </div>
                <div className="skills">
                    <h2 className='skills__title'>Skills</h2>
                    <div className="skills__container">
                        <div className="skills__category">
                            <h3 className="skills__subtitle">Development</h3>
                            <div className="skills__list">
                                <div className="skill__item">
                                    <span className="skill__name">HTML5</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">CSS3</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">JavaScript</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">React.js</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">Angular</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">Vite.js</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">Node.js</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">Express</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">PHP</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">MongoDB</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">SQL</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills__category">
                            <h3 className="skills__subtitle">Design</h3>
                            <div className="skills__list">
                                <div className="skill__item">
                                    <span className="skill__name">Figma</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">UX Research</span>
                                </div>
                                <div className="skill__item">
                                    <span className="skill__name">Procreate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutMe;