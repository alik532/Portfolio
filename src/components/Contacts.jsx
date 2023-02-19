import React from 'react'
import classes from '../style/Contacts.module.css'

const Contacts = () => {
  return (
    <div className={classes.contacts}>
        <div className={classes.email}>
            <h2>Email:</h2>
            alibeknurtuleu@gmail.com
        </div>
        <div className={classes.phone}>
            <h2>Phone:</h2>
            +7 700 227 46 59
        </div>
        <div className={classes.telegram}>
            <h2>Telegram:</h2>
            <a href="https://t.me/alibek532">@alibek532</a>
        </div>
    </div>
  )
}

export default Contacts