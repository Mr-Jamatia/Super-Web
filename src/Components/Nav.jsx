import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <nav>
            <span><Link to='/Home'>Super Web</Link></span>
            <ul>
                <li><Link to='/Home'>Home</Link></li>
                <li><Link to='/OurServices'>Our Services</Link></li>
                <li><Link to='/FAQ'>FAQ</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Nav