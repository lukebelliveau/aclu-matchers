import React, { Component } from 'react';

import './App.css';

import SortableList from './SortableList';
import TwitterComponent from './TwitterTimelineComponent'

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
          <h2>Welcome to ACLU Matchers Change</h2>
        </div>

        <SortableList data={data}/>

        <TwitterComponent widgetId="825768427780444164"/>
      </div>
    );
  }
}

export default App;