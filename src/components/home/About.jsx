import React from 'react';
import profilePic from './../../assets/images/profile-pic.jpg';

const About = props => {
    return (
        <section id="about">
            <div className="row section-intro">
                <div className="col-twelve">

                    <h5>About</h5>
                    <h1>Let me introduce myself.</h1>

                    <div className="intro-info">

                        <img src={profilePic} alt="Profile Picture"/>

                            <p className="lead">{props.user.portfolio.description}</p>
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
                            <span>{props.user.portfolio.name}</span>
                        </li>
                        <li>
                            <strong>Job:</strong>
                            <span>{props.user.portfolio.job.title}</span>
                        </li>
                        <li>
                            <strong>Company:</strong>
                            <span>{props.user.portfolio.job.company}</span>
                        </li>
                        <li>
                            <strong>Website:</strong>
                            <span>{props.user.portfolio.job.website}</span>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            {props.user.portfolio.emails.map((item, key) =>
                                <span style={{marginTop: '10px'}} key={key}>{item.address}</span>
                            )}
                        </li>

                    </ul>

                </div>

                <div className="col-six tab-full">

                    <h3>Skills</h3>
                    <p></p>

                    <ul className="skill-bars">
                        {props.user.portfolio.skills.map((item, key) =>
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