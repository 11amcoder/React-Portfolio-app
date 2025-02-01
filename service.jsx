import React from 'react';
import './service.css';
import Portfolio1 from '../../assets/random_pswd_project.png';
import Portfolio2 from '../../assets/portfolioproject.png';
import Portfolio3 from '../../assets/calculatorproject.png';


const service = () => {
    return (
        <section id='service'>
            <h2 className="serviceTitle">My Portfolio</h2>
            <span className="serviceDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="serviceImgs">
                <img src={Portfolio1} alt="" className="worksImg" />
                <img src={Portfolio2} alt="" className="worksImg" />
                <img src={Portfolio3} alt="" className="worksImg" />

            </div>
            <button className="serviceBtn">See More</button>
        </section>
    );
}

export default Works;