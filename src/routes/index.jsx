import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
// import './../assets/css/base.css';
// import './../assets/css/main.css';
// import './../assets/css/vendor.css';
// import Modernizr from 'npm-modernizr';
import appRoutes from './routes';
// import $ from 'jquery';
//
// window.jQuery = $;
// window.$ = $;

// import './../assets/js/plugins';
// import './../assets/js/main';

class Index extends Component {
    render() {
        return (
            <Switch>
                {appRoutes.map((route, key) =>
                    <Route key={key} exact {...route} />
                )}
            </Switch>
        );
    }
}

export default Index;