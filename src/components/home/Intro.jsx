import React from 'react';
import {AppGlobals} from "../../utils/Globals";

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro-overlay"/>
            <div className="intro-content">
                <div className="row">

                    <div className="col-twelve">

                        <h5>Hello, World.</h5>
                        <h1>I'm {AppGlobals.portfolio.name}.</h1>

                        <p className="intro-position">
                            <span>{AppGlobals.portfolio.professional.title}</span>
                            {AppGlobals.portfolio.professional.mainSkills.map((item, key) =>
                                <span key={key}>{item}</span>
                            )}
                        </p>

                        <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>

                    </div>

                </div>
            </div>

            <ul className="intro-social">
                {AppGlobals.portfolio.socialLinks.map((item, key) =>
                    <li><a key={key} href={item.url}><i className={item.faIcon}/></a></li>
                )}
            </ul>

        </section>
    );
};

export default Intro;