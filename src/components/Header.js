import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {colors, whitespace} from '../styles/shared';

const s = StyleSheet.create({
  white: colors.white,
  bgRed: colors.bgRed,
  mb0: whitespace.margins.mb0,
  header: {
    padding: '.8rem',
    boxShadow: `0 1px 0 ${colors.offWhite.color} inset, 0 -1px 0 ${colors.offWhite.color} inset`,
  },
  titleShadow: {
    textShadow: '1px 1px 1px black'
  },
})

const Header = () => (
  <div className={css(s.header, s.bgRed)}>
    <h1 className={css(s.white, s.titleShadow, s.mb0)}>ACLU DONATION MULTIPLIER</h1>
  </div>
);

export default Header;