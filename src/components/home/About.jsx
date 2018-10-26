import React from 'react';
import profilePic from './../../assets/images/profile-pic.jpg';
import {AppGlobals} from "../../utils/Globals";

const About = () => {
    return (
        <section id="about">
            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>

                    <div className="intro-info">

                        <img src={profilePic} alt="Profile Picture"/>

                            <p className="lead">{AppGlobals.portfolio.description}</p>
                    </div>

                </div>
            </div>

            <div className="row about-content">

                <div className="col-six tab-full">

                    <h3>Profile</h3>
                    <p></p>

                    <ul className="info-list">
                        <li>
                            <strong>Fullname:</strong>
                            <span>{AppGlobals.portfolio.name}</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span>{AppGlobals.portfolio.job.title}</span>
                        </li>
                        <li>
                            <strong>Company:</strong>
                            <span>{AppGlobals.portfolio.job.company}</span>
                        </li>
                        <li>
                            <strong>Website:</strong>
                            <span>{AppGlobals.portfolio.job.website}</span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            {AppGlobals.portfolio.emails.map((item, key) =>
                                <span key={key}>{item.address}</span>
                            )}
                        </li>

                    </ul>

                </div>

                <div className="col-six tab-full">

                    <h3>Skills</h3>
                    <p></p>

                    <ul className="skill-bars">
                        {AppGlobals.portfolio.skills.map((item, key) =>
                            <li key={key}>
                                <div className={`progress percent${item.levelInPercent}`}><span>{item.levelInPercent}%</span></div>
                                <strong>{item.name}</strong>
                            </li>
                        )}


                    </ul>

                </div>

            </div>

            <div className="row button-section">
                <div className="col-twelve">
                    <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
                    <a href="#" title="Download CV" className="button button-primary">Download CV</a>
                </div>
            </div>

        </section>
    );
};

export default About;