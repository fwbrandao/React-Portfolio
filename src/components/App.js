import React, { Component } from 'react';
import Home from './home'
import Javascript30 from './javascriptThirty';

import './App.css';
import DrumKit from './javascriptThirty/projects/drumKit';

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
