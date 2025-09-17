import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img 
        src={project.image} 
        alt={project.title} 
        style={{height: '350px', width: '100%', objectFit: 'cover'}}
      />
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech">
          {project.tech.map((t) => <span key={t} className="tag">{t}</span>)}
        </div><br></br>
        <div className="project-links">
            <button style={{marginRight: '10px',color: 'white', backgroundColor: '#007bff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer'}}>
          <a href={project.live} target="_blank" rel="noreferrer">Click here for demo</a>
          </button>
          <button style={{marginRight: '10px',color: 'white', backgroundColor: '#007bff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer'}}>
          <a href={project.repo} target="_blank" rel="noreferrer">Repo link</a>
          </button>
        </div>
      </div>
    </article>
  )
}
