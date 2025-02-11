import React, { useEffect, useContext } from 'react'
import ProjectCard from './ProjectCard'
import { MenuContext } from '../components/MenuContext'
import '../styles/projects.css'


function Works() {
    const { language } = useContext(MenuContext);

    useEffect(() => {
        document.body.setAttribute('data-page', 'projects');
        return () => {
            document.body.removeAttribute('data-page');
        }
    }, []);

    const translations = {
        EN: {
            title: "Projects",
            projects: [
                {
                    title: "Spark Agency",
                    description: "Development and Design",
                    note: "TFM",
                    image: "./img/spark-project.png",
                    url: "https://spark-agency.vercel.app/"
                },
                {
                    title: "AHK Gallery (In Progress)",
                    description: "Development and Design",
                    note: "Freelance",
                    image: "./img/ahk-project.png",
                },
                {
                    title: "Waylo Trips App (In Progress)",
                    description: "Development and Design",
                    note: "Freelance",
                    image: "./img/waylo-project.png",
                },
                {
                    title: "Didith Jim",
                    description: "Development and Design",
                    note: "Portfolio",
                    image: "./img/didith-project.png",
                }
            ],
            note: "see projects on linkedin."
        },
        ES: {
            title: "Proyectos",
            projects: [
                {
                    title: "Spark Agency",
                    description: "Desarrollo y Diseño",
                    note: "TFM",
                    image: "./img/spark-project.png",
                    url: "https://spark-agency.vercel.app/"
                },
                {
                    title: "AHK Gallery (En Progreso)",
                    description: "Desarrollo y Diseño",
                    note: "Freelance",
                    image: "./img/ahk-project.png",
                },
                {
                    title: "Waylo Trips App (En Progreso)",
                    description: "Desarrollo y Diseño",
                    note: "Freelance",
                    image: "./img/waylo-project.png",
                },
                {
                    title: "Didith Jim",
                    description: "Desarrollo y Diseño",
                    note: "Portfolio",
                    image: "./img/didith-project.png",
                }
            ],
            note: "ver proyectos en linkedin."
        }
    };

    const text = translations[language];

    return (
        <div className="project__container">
            <h1 className="project__title">{text.title}</h1>
            <div className="project__content">
                {text.projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <p className="project__note">{text.note}</p>
        </div>
    )
}

export default Works;