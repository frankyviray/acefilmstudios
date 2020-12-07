import React from 'react';
import '../Footer/Footer.css';

const Footer = () =>{
    return(
        <footer>
            <div className="social-icons-footer">
                    <a href="http://www.facebook.com/zoicstudios"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/zoicstudios"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/zoic-studios"><i className="fab fa-linkedin-in"></i></a>
                    <a href="https://twitter.com/ZoicStudios"><i className="fab fa-twitter"></i></a>
            </div>
            <div className="footer-nav">      
		            <a href="https://goo.gl/maps/zr7DAx441Ek">Los Angeles</a>
		            <a href="https://goo.gl/maps/tFW7JarGnsj">New York</a>
		            <a href="https://goo.gl/maps/EVMXTCCvg8q">Vancouver</a>	       
            </div>

            <div id="footer-copyright">Copyright © 2020 Ace Film Studios</div>
        </footer>
    );
}
export default Footer