import React from 'react';
import './Contact.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';


const Contact = (props, contactRef ) => {
    return (
        <div className="contact" ref= { contactRef }>
            <div className="content-heading"><span>Contact Us</span></div>
            
            <div className='contact-container content-container'>  

                <div className='contact-info-container'>
                    <p>Email: test@test.com</p>
                    <p>Tel: ( 818 ) xxx-xxxx</p>

                    <h1>follow us</h1>
                    <div className="social-media-container">
                        <li><FacebookIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><LinkedInIcon /></li>
                        <li><TwitterIcon /></li>
                    </div>

                </div>

                <form id="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" />
                    </div>


                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea className="form-control" rows="5"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default React.forwardRef(Contact);
