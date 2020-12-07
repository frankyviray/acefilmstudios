import React from 'react';
import "./Header.css";
import acelogo from "../../Images/acefilmstudio.png";

const Header = ( { about_Ref, release_Ref , contact_Ref } ) =>{

    const showHomeScreen = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }
      
    return(
        <div className="header fixed-top navbar navbar-expand-lg navbar-light">            
                {/* <div className="ace-logo">
                    <img src={ acelogo } alt="Ace Film Studio"/>                             
                </div>   */}
            
                <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
            <div className="header collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <li className="nav-link header-item" onClick= { showHomeScreen }>Home</li>
                    <li className="nav-link header-item" onClick= { () => about_Ref()}>About</li>
                    <li className="nav-link header-item" onClick= { () => release_Ref()}>Releases</li>
                    <li className="nav-link header-item" onClick= { () => contact_Ref()}>Contact</li>
                </div>
            </div>     

            
        </div>
    )
}

export default Header;