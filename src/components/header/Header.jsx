import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/profile-pic_04.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <div className="header__info">
                    <h1>Martín N. Quijano</h1>
                    <h5 className='text-light'>Licentiate in Computer Science</h5>
                    <CTA />
                </div>

                <div className="header__scrolldown">
                    <a href='#contact' className='scroll__down'>Scroll Down</a>
                </div>
            </div>
        </header>
    )
}

export default Header