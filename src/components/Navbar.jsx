import logo from '../assets/logo.svg'
import { useState } from 'react'

export default function Navbar(){
    const [showmenu,togglemenu] = useState(false);

    function toggleMobileMenu(){
        togglemenu(prev => !prev);
        return;
    }
    return(
        <>
        <div className="nav-container">
            <nav className="navbar container">
                <div className='nav-left'>
                    <div className="logo">
                        <img src={logo} alt="" width="120px"/>
                    </div>
                    <div>
                        <ul className="nav-links">
                            <li>Portfolio</li>
                            <li>Funding</li>
                            <li>About us</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                </div>
                <div className='nav-right'>
                    <ul>
                        <li>Investment Products</li>
                        <li>
                            <button className='secondary-btn'>Sign in</button>
                        </li>
                        <li>
                            <button className='primary-btn'>Get in touch</button>
                        </li>
                    </ul>
                </div>
                


                <div className="toggle-btns">
                    <button className='toggle-btn' onClick={toggleMobileMenu}>Toggle</button>
                </div>

                {showmenu && 
                <div className="mobile-menu">
                        <ul className="nav-links">
                            <li>Portfolio</li>
                            <li>Funding</li>
                            <li>About us</li>
                            <li>Updates</li>
                            <li>Investment Products</li>
                            <li>
                                <button className='secondary-btn'>Sign in</button>
                            </li>
                            <li>
                                <button className='primary-btn'>Get in touch</button>
                            </li>
                        </ul>
                </div>
                }
            </nav>
        </div>
        </>
    )
}