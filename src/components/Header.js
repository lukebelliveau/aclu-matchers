import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {colors, whitespace} from '../styles/shared';

const style = StyleSheet.create({
  white: colors.white,
  mb0: whitespace.margins.mb0,
  header: {
    padding: '20px',
    background: `url('//i.imgur.com/sAxC5zT.jpg')`,
    backgroundSize: '100%'
  }
})

const Header = () => (
  <div className={css(style.header, style.bgBlue)}>
    <h1 className={css(style.white, style.mb0)}>ACLU Donation Multiplier</h1>
  </div>
);

export default Header;
