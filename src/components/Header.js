import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {colors, whitespace} from '../styles/shared';
import TotalMatched from './TotalMatched';


const style = StyleSheet.create({
  white: colors.white,
  mb0: whitespace.margins.mb0,
  header: {
    paddingTop: '1rem',
    background: `url('//i.imgur.com/sAxC5zT.jpg')`,
    backgroundSize: '100%'
  },
  title: {
    marginBottom: '1rem',
    '@media (max-width: 425px)': {
      marginRight: '3rem',
      marginLeft: '3rem'
     }
  }
});

const Header = () => (
  <div className={css(style.header, style.bgBlue)}>
    <h1 className={css(style.white, style.mb0, style.title)}>ACLU Donation Multiplier</h1>
    <TotalMatched />
  </div>
);

export default Header;
