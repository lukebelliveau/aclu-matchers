import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';

import './App.css';
import CloudwokComponent from './CloudwokComponent';

const twitterHandle = 'acluMatchHelper';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <h2>Welcome to ACLU Matchers</h2>
        </div>

        <CloudwokComponent />

        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: twitterHandle
          }}
          options={{
            username: twitterHandle,
            height: '600',
            width: '400'
          }}
        />
      </div>
    );
  }
}

export default App;