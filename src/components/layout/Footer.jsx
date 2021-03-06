import React from 'react';
import SocialLinks from "../common/SocialLinks";
import {AppGlobals} from "../../utils/Globals";

const Footer = () => {
    return (
        <footer>
            <div className="row">

                <div className="col-six tab-full pull-right social">

                    <ul className="footer-social">
                        <SocialLinks/>
                    </ul>

                </div>

                <div className="col-six tab-full">
                    <div className="copyright">
                        <span>© Copyright {AppGlobals.app.name} 2016.</span>
                        <span><a href="#/">Software Engineer</a></span>
                    </div>
                </div>

                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#intro-sec"><i className="fa fa-long-arrow-up"/></a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;