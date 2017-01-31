import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';

import Instructions from './components/Instructions'
import Statement from './components/Statement';
import TotalMatched from './components/TotalMatched';

const twitterHandle = 'ACLU_Multiplier';

const styles = {
  wrapper: {
    maxWidth: '1028px',
    position: 'relative',
    margin: '0 auto',
  },
  app: {
    textAlign: 'center',
  },
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
        <div style={ styles.app }>

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
