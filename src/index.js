import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <AppRoute />
    </BrowserRouter>,
    document.getElementById('root'));

