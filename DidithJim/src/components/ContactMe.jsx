import React from 'react'
import '../styles/contact.css'

function Contact() {
    return (
        <div className="contact__page">
            <main className='contact__container'>
                <section className='contact__section'>
                    <h1 className='contact__title'>Contact</h1>
                    <div className='contact__content'>
                        <div className='contact__group'>
                            <h2 className='contact__subtitle'>Mail</h2>
                            <div className='contact__links'>
                                <a href="mailto:judithfullstack@gmail.com" className='contact__link'>judithfullstack@gmail.com</a>
                            </div>
                        </div>
                        <div className='contact__group'>
                            <h2 className='contact__subtitle'>Social Medias</h2>
                            <div className='contact__links'>
                                <a href="https://www.linkedin.com/in/judith-r%C3%ADos/" className='contact__link' target="_blank" rel="noreferrer">linkedin</a>
                                <a href="https://github.com/DidithJim" className='contact__link' target="_blank" rel="noreferrer">github</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact;