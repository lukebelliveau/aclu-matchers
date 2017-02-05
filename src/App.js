import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';
import { Timeline } from 'react-twitter-widgets';

import Header from './components/Header';
import Instructions from './components/Instructions';
import Cloudwok from './components/ACLUCloudwok';
import ActionButtons from './components/ActionButtons';
import Statement from './components/Statement';
import Footer from './components/Footer';

const twitterHandle = 'match__US';

const s = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
  },
});

const twitterFeed = {
  dataSource: {
    sourceType: 'profile',
    screenName: twitterHandle
  },
  options: {
    username: twitterHandle,
    height: 700,
    width: '70%'
  }
};

class App extends Component {
  render() {
    return (
      <div className={css(s.wrapper)}>
        <Header />
        <Instructions />
        <Cloudwok />
        <ActionButtons />
        <Statement />
        <Timeline dataSource={twitterFeed.dataSource} options={twitterFeed.options} />
        <Footer />
      </div>
    );
  }
};

export default App;
