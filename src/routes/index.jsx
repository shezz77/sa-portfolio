import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import appRoutes from './routes';

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