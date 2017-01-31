import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import { Timeline } from 'react-twitter-widgets';

import Instructions from './components/Instructions'
import Statement from './components/Statement';
import TotalMatched from './components/TotalMatched';

const twitterHandle = 'ACLU_Multiplier';

const s = StyleSheet.create({
  wrapper: {width: '100%'},
  app: {textAlign: 'center'},
});

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
};

class App extends Component {
  render() {
    return (
      <div className={css(s.wrapper)}>
        <div className={css(s.app)}>

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
};

export default App;
