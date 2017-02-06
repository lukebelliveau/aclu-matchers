import React, { Component } from 'react';
import {StyleSheet, css} from 'aphrodite';

import Header from './components/Header';
import Instructions from './components/Instructions';
import Cloudwok from './components/ACLUCloudwok';
import OtherCallsToAction from './components/otherCallsToAction/OtherCallsToAction';
import TwitterWidget from './components/TwitterWidget';
import Statement from './components/Statement';
import Footer from './components/Footer';

const s = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <div className={css(s.wrapper)}>
        <Header />
        <Instructions />
        <Cloudwok />
        <OtherCallsToAction />
        <Statement />
        <TwitterWidget />
        <Footer />
      </div>
    );
  }
};

export default App;
