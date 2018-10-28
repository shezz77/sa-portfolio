import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(promiseMiddleware),
));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRoute />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

