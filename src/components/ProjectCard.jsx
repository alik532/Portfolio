import React from 'react'
import classes from '../style/ProjectCard.module.css'

const ProjectCard = ({project, onClick, setOpenProject}) => {

  const handleClick = () => {
    setOpenProject(project)  
    onClick()
  }

  return (
    <div className={classes.projectCard} style={{backgroundImage: `url(${project.img})`}}>
      <h1 className={classes.title}>{project.title}</h1>
      <div className={classes.cover}></div>
      <div className={classes.buttonContainer}>
        <button className={`${classes.githubButton} ${classes.button}`}>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            Source Code
          </a>
        </button>
        <button className={`${classes.appButton} ${classes.button}`}>
          <a href={project.appLink} target="_blank" rel="noreferrer">
            Try App
          </a>
        </button>
        <button className={`${classes.description} ${classes.button}`} onClick={handleClick}>Description</button>
      </div>
    </div>
  )
}

export default ProjectCard