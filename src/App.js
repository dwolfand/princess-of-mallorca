import React, { Component } from 'react';
import Countdown from './Countdown'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Countdown date={`2019-09-20T00:00:00`} />
          <img src="/princess-of-mallorca.jpg" className="main-img" alt="The Princess of Mallorca" />
        </header>
      </div>
    );
  }
}

export default App;
