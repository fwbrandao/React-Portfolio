import React from 'react';
import { Route } from 'react-router-dom';

import Home from './home';
import Javascript30 from './javascriptThirty/index';
import DrumKit from './javascriptThirty/projects/drumKit';
import JsClock from './javascriptThirty/projects/jsClock/index';
import Canvas from './javascriptThirty/projects/canvas/index';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Home} ></Route>
        <Route path='/javascriptThirty' component={Javascript30} ></Route>
        <Route path='/drum' component={DrumKit} ></Route>
        <Route path='/jsclock' component={JsClock} ></Route>
        <Route path='/canvas' component={Canvas} ></Route>
      </div>
    );
  }
}

export default App;
