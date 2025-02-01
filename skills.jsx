import React from "react";
import './skills.css';
import UIDesign from '../../assets/Uiuxwallpaper.jpg';
import WebDesign from '../../assets/webdev.jpg';
import AppDesign from '../../assets/mobile_apps.png';

const skills = () =>{
    return(
        <section id = 'skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am an aspiring web Developer, who  Developer specializes in building and maintaining websites and web applications, focusing on front-end technologies like HTML, CSS, and JavaScript, as well as back-end frameworks, databases, and APIs to ensure seamless functionality and user experience. Meanwhile, an **AI Developer** leverages machine learning, deep learning, and data science to create intelligent applications capable of automation, natural language processing, and predictive analytics. Combining web development with AI enables the creation of smart, data-driven web applications that offer personalized user experiences, automation, and advanced decision-making capabilities.</span>
            <div className="skillBars">
                <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            </div>
            
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WebsiteDesign</h2>
                    <p>This is a demo text, you can write your own content related to web design here.</p>
                </div>

            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>AppDesign</h2>
                    <p>Write content related to Web Design her</p>
                </div>
            
        </div>
        </div>
        </section>
    );
    

}

export default skills;
