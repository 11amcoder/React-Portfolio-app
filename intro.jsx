import React from "react";
import './intro.css';
import bg from '../../assets/newmyimage.png'
import btnImg from '../../assets/hired.svg';
import {Link} from 'react-scroll';

const Intro = () => {
    return(
            <section id="intro">
                <div className="introContent">
                    <span className="hello">Welcome to my portfolio,</span> 
                    <span className="introText">I'm <span className="introName">Numaan,</span></span>
                    <span className="introPara">an AI Engineer & Developer from Canada.</span>
                    <p className="introBody">Some write code. Others swing through city. 
                    I do both</p>
                    <p className="missionStatement">
                        Leveraging cutting-edge AI & Software Development to drive 
                        <br />
                        meaningful advancements in technology.
                    </p>

                    <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" /> About me </button></Link>

                </div>
                <img src={bg} alt="Profile" className="bg" />
            </section>
        
    );
}

export default Intro;