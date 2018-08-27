import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Notebook from './components/Notebook';
import Cover from './components/Cover';
import TableOfContents from './components/TableOfContents';
import Random from './components/Random';
import Search from './components/Search';

// Setup Redux
import { Provider } from 'react-redux';
import { configureStore } from './reducers/index';
const store = configureStore(); 

class App extends Component {
  render() {
    return (
      <Provider className="App" store={store}>
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
      </Provider>
    );
  }
}

export default App;
