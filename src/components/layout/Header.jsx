import React from 'react';
import {AppGlobals} from "../../utils/Globals";

const Header = props => {
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
                    <a onClick={handleMenu} className="menu-toggle" href="#/"><span>Menu</span></a>
                    <div className="logo">
                        {/*<a href="/">{props.user.portfolio.nickName}</a>*/}
                    </div>
                    <nav id="main-nav-wrap">
                        <ul className="main-navigation">
                            {AppGlobals.mainMenu.length > 0 ?
                                AppGlobals.mainMenu.map((item, key) =>
                                    <li key={key} className={props.bookmark === item.href ? 'current' : ''}>
                                        <a className="smoothscroll"  href={`#${item.href}`} title="">{item.title}</a>
                                    </li>
                                ): null
                            }
                            {/*<li><a href="styles.html" title="">Style Demo</a></li>*/}
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
};

export default Header;