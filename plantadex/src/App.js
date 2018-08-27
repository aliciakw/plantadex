import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Notebook from './components/Notebook';
import Cover from './components/Cover';
import TableOfContents from './components/TableOfContents';
import Random from './components/Random';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notebook>
          <Router>
            <div>
              <Route exact path="/" component={Cover} />
              <Route path="/contents" component={TableOfContents} />
              <Route path="/random" component={Random} />
              <Route path="/search" component={Search} />
            </div>
          </Router>
        </Notebook>
      </div>
    );
  }
}

export default App;
