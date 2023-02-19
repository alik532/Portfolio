import React from 'react'
import classes from '../../style/ModalProject.module.css'

const ModalProject = ({isShown, setIsShown, project}) => {

    return isShown ? (
      <div className={classes.container} onClick={() => setIsShown(false)}>
        <div className={classes.modal} onClick={(e) => e.stopPropagation()} style={{backgroundImage: `url(${project.img})`}}>
          <div className={classes.content}>
            <div className={classes.title}>{project.title}</div>
            <div className={classes.desc}>{project.description}</div>
            <div className={classes.stack}>
              {project.stack.map(tech => 
                <div className={classes.tech}>
                  <img className={classes.logo} src={tech.logo} alt=""/>
                </div>
              )}
            </div>
          </div>
          <div className={classes.cover}></div>
        </div>
      </div>
    ) : null
}

export default ModalProject