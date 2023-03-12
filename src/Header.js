import React from 'react';
import {NavLink} from 'react-router-dom';
import './css/Header.css';

function Header(){
    return(
        <nav className='navBar'>
            <img src='./assets/images/Logo.svg' alt='logo'/>
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
    )
}

export default Header;