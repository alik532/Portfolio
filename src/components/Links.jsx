import React from 'react'
import classes from '../style/Links.module.css'
import githubLogo from './UI/githubLogo.svg'
import headHunterLogo from './UI/headhunterLogo.svg'
import leetCodeLogo from './UI/leetCodeLogo.svg'
import codewarsLogo from './UI/codewardLogo.svg'
import linkedInLogo from './UI/linkedInLogo.svg'

const Links = () => {

  return (
    <div className={classes.links}>
        <a href="https://hh.kz/resume/abc69d32ff0901d6150039ed1f7a6c32307035">
            <button className={`${classes.button} ${classes.hh}`}>
                <img src={headHunterLogo} alt="" />
                Head Hunter
            </button>
        </a>
        <a href="https://www.linkedin.com/in/alibek-nurtileu-321065249/">
            <button className={`${classes.button} ${classes.li}`}>
                <img src={linkedInLogo} alt="" />
                Linked In
            </button>
        </a>
        <a href="https://www.codewars.com/users/alik532">
            <button className={`${classes.button} ${classes.cw}`}>
            <img src={codewarsLogo} alt="" />
                CodeWars
            </button>
        </a>
        <a href="https://leetcode.com/Alik532/">
            <button className={`${classes.button} ${classes.lc}`}>
                <img src={leetCodeLogo} alt="" />
                LeetCode
            </button>
        </a>
        <a href="https://github.com/alik532">
            <button className={`${classes.button} ${classes.gh}`}>
                <img src={githubLogo} alt="" />
                Git Hub
            </button>
        </a>
    </div>
  )
}

export default Links