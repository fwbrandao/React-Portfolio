import React, { Component } from 'react';
import Home from '../src/components/home'
import Javascript30 from './components/javascriptThirty';

import './App.css';
import DrumKit from './components/javascriptThirty/projects/drumKit';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Javascript30 />
        <DrumKit />
      </div>
    );
  }
}

export default App;
