import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Header from './components/Header';
import TotalMatched from './components/TotalMatched'
import ReceiptUpload from './components/receiptUpload/ReceiptUpload';
import OtherCallsToAction from './components/otherCallsToAction/OtherCallsToAction';
import Statement from './components/Statement';
import Footer from './components/footer/Footer';

import {alignCenter} from './styles/shared'

const s = StyleSheet.create({
  alignCenter,
});

class App extends Component {
  render() {
    return (
      <div className={css(s.alignCenter)}>
        <Header />
        <TotalMatched />
        <ReceiptUpload />
        <OtherCallsToAction />
        <Statement />
        <Footer />
      </div>
    );
  }
};

export default App;
