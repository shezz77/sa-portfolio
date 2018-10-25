import React from 'react';
import {AppGlobals} from "../../utils/Globals";

const SocialLinks = () => {
    return (
        <div>
            {AppGlobals.portfolio.socialLinks.map((item, key) =>
                <li key={key}><a href={item.url}><i className={item.faIcon}/></a></li>
            )}
        </div>
    );
};

export default SocialLinks;