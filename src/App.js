import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';

import './styles/app.css';
import Instructions from './components/InstructionsComponent'
import Statement from './components/StatementComponent';
import TotalMatched from './components/TotalMatchedComponent';

const twitterHandle = 'ACLU_Multiplier';

const styles = {
  wrapper: {
    maxWidth: '1028px',
    position: 'relative',
    margin: '0 auto'
  }
}

const twitterFeed = {
  dataSource: {
    sourceType: 'profile',
    screenName: twitterHandle
  },
  options: {
    username: twitterHandle,
    height: '400',
    width: '70%'
  }
}

class App extends Component {
  render() {
    return (
      <div style={ styles.wrapper }>
        <div className="app">

          <Instructions />

          <TotalMatched />

          <Statement />

          <Timeline
            dataSource={twitterFeed.dataSource}
            options={twitterFeed.options}
          />          
        </div>
      </div>
    );
  }
}

export default App;
