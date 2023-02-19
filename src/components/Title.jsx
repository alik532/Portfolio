import React from 'react'
import classes from '../style/Title.module.css'

const Title = ({text}) => {
  return (
    <div className={classes.title}>
        <h1 className={classes.text}>{text}</h1>
    </div>
  )
}

export default Title