import React, { Component } from 'react';

import './App.css';

import TwitterComponent from './twitter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to ACLU Matchers</h2>
        </div>
        <TwitterComponent />
      </div>
    );
  }
}

export default App;
