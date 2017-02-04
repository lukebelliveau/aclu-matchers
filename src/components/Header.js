import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {whitespace} from '../styles/shared';
import TotalMatched from './TotalMatched';


const style = StyleSheet.create({
  mb0: whitespace.margins.mb0,
  header: {
    backgroundSize: '100%'
  },
  title: {
    margin: '20px 0',
    '@media (max-width: 425px)': {
      margin: 10,
      fontSize: 30
     }
  }
});

const Header = () => (
  <div className={css(style.header, style.bgBlue)}>
    <h1 className={css(style.mb0, style.title)}>matchUS</h1>
    <h1 className={css(style.mb0, style.title)}>matchUS</h1>
    <TotalMatched />
  </div>
);

export default Header;
