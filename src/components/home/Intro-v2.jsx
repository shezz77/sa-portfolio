import React from 'react';
import SocialLinks from "../common/SocialLinks";

const IntroV2 = props => {
    return (
        <div className="container demo-1">
            <div className="content">
                <div id="large-header" className="large-header">
                    <canvas id="demo-canvas"/>
                    {/*<h1 className="main-title">Connect <span className="thin">Three</span></h1>*/}
                    {/*<h5 className={'main-title'}><span className={'thin'}>Hello, World.</span></h5>*/}
                    <div className={'main-title'}>
                        <div className="intro-content">
                            <div className="row">

                                <div className="col-twelve">

                                    <h5>Hello, World.</h5>
                                    <h2 style={{ color: 'white' }}>I'm {props.user.name}.</h2>

                                    <p className="intro-position">
                                        <span>{props.user.professional.title}</span>
                                        {props.user.professional.mainSkills.map((item, key) =>
                                            <span key={key}>{item}</span>
                                        )}
                                    </p>

                                    <a className="button stroke smoothscroll" href="#about-sec" title="">More About Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul style={{textAlign: 'center'}} className="intro-social">
                        <SocialLinks/>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default IntroV2;