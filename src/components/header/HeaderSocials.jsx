import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiItchdotio } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com/in/mnquijano' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com/MartinQuijano' target="_blank"><FaGithub /></a>
            <a href='https://kottler.itch.io/' target="_blank"><SiItchdotio /></a>
        </div>
    )
}

export default HeaderSocials