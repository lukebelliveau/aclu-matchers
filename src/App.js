import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import { Timeline } from 'react-twitter-widgets';

import Header from './components/Header';
import Instructions from './components/Instructions';
import Statement from './components/Statement';
import TotalMatched from './components/TotalMatched';

const twitterHandle = 'ACLU_Multiplier';

const s = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
  },
  a: {
    color: '#40B2F6',
    textDecoration: 'none',
    paddingBottom: 10
  }
});

const twitterFeed = {
  dataSource: {
    sourceType: 'profile',
    screenName: twitterHandle
  },
  options: {
    username: twitterHandle,
    width: '60%'
  }
};

class App extends Component {
  render() {
    return (
      <div className={css(s.wrapper)}>
        <Header />
        <Instructions />
        <TotalMatched />
        <Statement />
        <Timeline dataSource={twitterFeed.dataSource} options={twitterFeed.options} />
        <a className={css(s.a)} href="https://docs.google.com/document/d/1esGL2ywiMzuQHAM4zUEQt_pcVtc-MU6OxNKhULaimKk/edit?usp=sharing">about matchUS.us</a>
      </div>
    );
  }
};

export default App;
