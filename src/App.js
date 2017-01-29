import React, { Component } from 'react';

import './App.css';

import SortableList from './SortableList';
import { Timeline } from 'react-twitter-widgets';

const data = {
  items: [
    "@sacca",
    "@sia",
    "@lyft"
  ]
};

const twitterHandle = 'acluMatchHelper';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Welcome to ACLU Matchers</h2>
        </div>

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: twitterHandle
          }}
          options={{
            username: twitterHandle,
            height: '400'
          }}
        />
      </div>
    );
  }
}

export default App;