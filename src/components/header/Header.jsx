import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import HeaderSocial from './HeaderSocial' //import of headerSocial component
import me from '../../assets/me.jpg'
export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Anu Kelma-Gifty Ngu</h1>
                <h5 className='text-light'>Engineering student</h5>
                <CTA />
                <HeaderSocial />
                <div className='my_image'>
                    <img src={me} alt='my pic' />
                </div>
                <a href='#contact' className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}
export default Header;