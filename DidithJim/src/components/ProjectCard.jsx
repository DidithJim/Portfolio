import React from 'react'

function ProjectCard({ title, description, image, url, note }) {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="project__link">
            <img src={image} className='project__image' alt={title} />
            <h3 className="project__subtitle">{title}</h3>
            <p className="project__description">{description}</p>
            <p className="project__description">{note}</p>
        </a>
    )
}

export default ProjectCard;