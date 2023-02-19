import React from 'react'
import classes from '../style/Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
        <a className={classes.mainButton} href="#projects">
            <div className={`${classes.mainLink} ${classes.links}`}>PROJECTS</div>
        </a>
        <div className={classes.navbar}>
            <a href="#links" className={classes.links}>Links</a>
            <a href="#about_me" className={classes.links}>About me</a>
            <a href="#contacts" className={classes.links}>Contacts</a>
        </div>
    </div>
  )
}

export default Header