import React, { Component } from 'react';
import './App.css';
const logoUri = 'images/leaf_logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <header className="App-header">
            <img src={logoUri} className="App-logo" alt="logo" />
            <h1 className="App-title">Plantadex</h1>
            <h2>A Pokedex for plants</h2>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
