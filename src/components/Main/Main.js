import React from 'react';
import '../Main/Main.css';
import acelogo from "../../Images/ace-logo.png";
// import acelogoText from "../../Images/ace-logo-txt-white.png";


const Main = (props, mainRef) => {

    return (
        <div className="main" ref={mainRef}>
            <div className="main-title">
                {/* <h1><span>ACE FILM STUDIOS</span></h1>     */}
                <div className="logo-img">
                    <p>WEBSITE COMING SOON</p>
                    <img src={acelogo} alt="ACE FILM STUDIOS" className="ace-logo-movie" /><br />
                </div>

                <p>television, Motion Picture <br />& digital media production.</p>
            </div>
        </div>
    );
}

export default React.forwardRef(Main);