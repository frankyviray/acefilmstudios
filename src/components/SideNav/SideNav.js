import React from 'react';
import '../SideNav/SideNav.css'
import test_logo from '../../Images/test-logo.png'
import { useState } from 'react';
import ReleaseSubMenu from './ReleaseSubMenu';

const SideNav = () =>{
    const [ submenu , setSubMenu ] = useState();

    return(             
        <nav className="navbar side-nav-bar justify-content-center">   
                <a  href="http://example.com" id="logo">
                    <img src={ test_logo } alt="testlogo"/>
                </a>                   
                         
                <ul className="navbar-nav">
                    <li className="nav-item" onClick={ ()=> setSubMenu(<ReleaseSubMenu />)}>
                    <a className="nav-link">releases</a>
                    { submenu }
                    </li>                
                    <li className="nav-item">
                    <a className="nav-link" href="http://example.com">about</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="http://example.com">contact</a>
                    </li>

                    

                    
                </ul>        
        </nav>
        
    );
}

export default SideNav;