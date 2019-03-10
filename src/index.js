import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Root from './Root';

import App from './components/App';

import "/Users/nando/master-portfolio-2019/master-portfolio-2019/src/assets/css/nucleo-icons.css"
import "/Users/nando/master-portfolio-2019/master-portfolio-2019/src/assets/scss/blk-design-system-react.scss?v=1.0.0";
import "/Users/nando/master-portfolio-2019/master-portfolio-2019/src/assets/demo/demo.css"

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </BrowserRouter>
    </Root>
    , document.querySelector('#root'));


