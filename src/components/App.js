import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Javascript30 from './javascriptThirty/index';
import Home from './home'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Home} ></Route>
        <Route path='/javascriptThirty' component={Javascript30} ></Route>
      </div>
    );
  }
}

export default App;
