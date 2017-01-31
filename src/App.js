import React, { Component } from 'react';

import { Timeline } from 'react-twitter-widgets';

import './App.css';
import Instructions from './InstructionsComponent'
import Statement from './StatementComponent';
import TotalMatched from './TotalMatchedComponent';

const twitterHandle = 'ACLU_Multiplier';

const styles = {
  wrapper: {
    width: '800',
    position: 'relative'
  },
  app: {
    width: '40%'
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
      <div className={ styles.wrapper }>
        <div className={ styles.app } >
          <div className="App">

            <Instructions />

            <TotalMatched />

            <Statement />

            <Timeline
              dataSource={twitterFeed.dataSource}
              options={twitterFeed.options}
            />
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;