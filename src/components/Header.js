import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {colors, whitespace} from '../styles/shared';

const s = StyleSheet.create({
  headerPadding: {
    padding: '.8rem',
  },
  white: {
    color: '#fff'
  },
  titleShadow: {
    textShadow: '1px 1px 1px black'
  },
  bgRed: colors.bgRed,
  mb0: whitespace.margins.mb0,
})

const Header = () => (
  <div className={css(s.headerPadding, s.bgRed)}>
    <h1 className={css(s.white, s.titleShadow, s.mb0)}>ACLU DONATION MULTIPLIER</h1>
  </div>
);

export default Header;