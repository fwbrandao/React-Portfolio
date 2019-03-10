import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';

import "/Users/nando/master-portfolio-2019/master-portfolio-2019/src/assets/css/nucleo-icons.css"
import "/Users/nando/master-portfolio-2019/master-portfolio-2019/src/assets/scss/blk-design-system-react.scss?v=1.0.0";
import "/Users/nando/master-portfolio-2019/master-portfolio-2019/src/assets/demo/demo.css"

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' component={App}></Route>
        </Switch>
    </BrowserRouter>
    , document.querySelector('#root'));


