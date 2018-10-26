import React from 'react';
import {AppGlobals} from "../../utils/Globals";

const Header = () => {
    const handleMenu = e => {
        e.preventDefault();

        let toggleButton = window.$('.menu-toggle');
        let nav = window.$('.main-navigation');

        toggleButton.toggleClass('is-clicked');
        nav.slideToggle();
    };

    return (
        <header>
            <div className="row">
                <div className="top-bar">
                    <a onClick={handleMenu} className="menu-toggle" href="#"><span>Menu</span></a>
                    <div className="logo">
                        <a href="/">{AppGlobals.portfolio.nickName}</a>
                    </div>
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            <li className="current"><a className="smoothscroll"  href="#intro-sec" title="">Home</a></li>
                            <li><a className="smoothscroll"  href="#about-sec" title="">About</a></li>
                            <li><a className="smoothscroll"  href="#resume-sec" title="">Resume</a></li>
                            <li><a className="smoothscroll"  href="#portfolio-sec" title="">Portfolio</a></li>
                            <li><a className="smoothscroll"  href="#services-sec" title="">Services</a></li>
                            <li><a className="smoothscroll"  href="#contact-sec" title="">Contact</a></li>
                            {/*<li><a href="styles.html" title="">Style Demo</a></li>*/}
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
};

export default Header;