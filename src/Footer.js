import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Footer.css';

function Footer(){
    return(
        <div className='footer'>
            <img className='banner bannerImg'  src='./assets/images/Rectangle 25.png' alt='footer'/>
            
            <nav className='navBar'>
                <div>
                    <img src='./assets/images/Logo.svg' alt='logo'/>
                    <div>
                        <p>Terms & Conditions<br/>
                        Privacy Policy</p>
                    </div>
                </div>
                <NavLink exact className='navPar' activeClassName="active" to="/">
                    HOME
                </NavLink>
                <NavLink className='navPar' activeClassName="active" to="/about">
                    ABOUT
                </NavLink>
                <NavLink className='navPar' activeClassName="active" to="/career">
                    CAREER
                </NavLink>
                <NavLink className='navPar' activeClassName="active" to="/contact">
                    CONTACT
                </NavLink>
            </nav>
        </div>
    )
}

export default Footer;