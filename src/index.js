import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';

import './index.css';
// import Index from './views/index';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App}></Route>
        </Switch>
    </BrowserRouter>
    , document.querySelector('#root'));


