import React from 'react'
import '../MobileHeader/MobileHeader.css'


const MobileHeader = (props) => {
    
    return(   
    
     <nav className="navbar navbar-dark mobile-nav-bar">
        <button onClick={  ()=> props.toggleSideNav() } className="navbar-toggler mobile-header-toggle-btn" 
        type="button">
             <span className="navbar-toggler-icon"></span>
     </button>
     </nav>
    );
}

export default MobileHeader;