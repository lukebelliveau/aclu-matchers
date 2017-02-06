import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import Header from './components/Header';
import TotalMatched from './components/TotalMatched'
import ReceiptUpload from './components/receiptUpload/ReceiptUpload';
import OtherCallsToAction from './components/otherCallsToAction/OtherCallsToAction';
import Statement from './components/Statement';
import Footer from './components/footer/Footer';

const styles = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
  },
});

class App extends Component {
  render() {
    return (
      <div className={css(styles.wrapper)}>
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
