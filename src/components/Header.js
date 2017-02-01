import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {colors, whitespace} from '../styles/shared';
import TotalMatched from './TotalMatched';

const s = StyleSheet.create({
  white: colors.white,
  bgRed: colors.bgRed,
  mb0: whitespace.margins.mb0,
  header: {
    padding: '.8rem',
    marginTop: '0.7rem',
  },
  hr: {
    marginTop: '1.3rem',
  },
  titleHeight: {
    fontSize: '2rem',
  },
  titleMargin: {
    marginBottom: '0.6rem'
  }
});

const Header = () => (
  <div className={css(s.header, s.black)}>
    <h1 className={css(s.black, s.mb0, s.titleHeight, s.titleMargin)}>ACLU Donation Multiplier</h1>
    <TotalMatched />
    <hr className={css(s.hr)} />
  </div>
);

export default Header;