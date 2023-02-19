import React from 'react'
import classes from '../style/Projects.module.css'
import ProjectCard from './ProjectCard'
import { useState } from 'react'
import { projectsData } from '../data/projects'
import ModalProject from './UI/ModalProject'

const Projects = () => {

    const [projects] = useState(projectsData)
    const [modalIsShown, setModalIsShown] = useState(false)
    const [openProject, setOpenProject] = useState(null)

    return (
        <div className={classes.projects}>
            <ModalProject isShown={modalIsShown} setIsShown={setModalIsShown} project={openProject}/>
            {projects.map(project => 
                <ProjectCard project={project} onClick={() => setModalIsShown(true)} setOpenProject={setOpenProject}/>    
            )}
        </div>
    )
}

export default Projects