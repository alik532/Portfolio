import React from 'react'
import classes from '../style/Intro.module.css'
import mainImg from '../images/main.png'

const Intro = () => {
    
    return (
        <div className={classes.intro} >
            <div className={classes.container} >
                <img src={mainImg} alt="" className={classes.image}/>
            </div>
        </div>
    )
}

export default Intro