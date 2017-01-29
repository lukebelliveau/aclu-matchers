import React, { Component } from 'react';

import './App.css';

import TwitterComponent from './twitter';
import SortableList from './SortableList';

var data = {
  items: [
    "@sacca",
    "@sia",
    "@lyft"
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Welcome to ACLU Matchers</h2>
        </div>

        <SortableList data={data}/>

        <TwitterComponent />
      </div>
    );
  }
}

export default App;
