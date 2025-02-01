import './contact.css'

import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import React,{useRef} from 'react';
//import emailjs from '@emailjs/browser';


const Contact = () => {
    return(
    <section id="contactPage">
        <div id="clients">
            <h1 className='contactPageTitle'>My clients</h1>
            <p className='clientDesc'>
                I have had the privilage to work with a diverse group of companies.
                Some of the notable companies I have worked with are
            </p>
            <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg" />
                    <img src={Adobe} alt="Client" className="clientImg" />
                    <img src={Microsoft} alt="Client" className="clientImg" />
                    <img src={Facebook} alt="Client" className="clientImg" />   
            </div>
        </div>

        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={twitterIcon} alt="" className="link"/>
                    <img src={youtubeIcon} alt="" className="link"/>
                </div>
            </form>
        
        </div>




    </section>
    )
}
export default Contact