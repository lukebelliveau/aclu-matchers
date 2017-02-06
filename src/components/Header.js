import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { whitespace } from '../styles/shared';

const style = StyleSheet.create({
  mb0: whitespace.margins.mb0,
  header: {
    backgroundSize: '100%'
  },
  title: {
    margin: '0.8rem 0',
    fontSize: '1.5rem',
    textAlign: 'left',
    display: 'inline-block',
    '@media (max-width: 425px)': {
      margin: '0 0 1rem 0',
      fontSize: '1.5rem'
     }
  },
  logo: {
    height: '3rem',
    display: 'inline-block',
    marginRight: '1rem',
    '@media (max-width: 425px)': {
      display: 'block',
      height: 'auto',
      width: '90%',
      margin: '0 auto',
      marginTop: '1rem',
      marginBottom: '0.5rem'
    },
  },
  break: {
      '@media (max-width: 425px)': {
        display: 'inline-block',
      }
  }
});

export default () => (
  <div className={css(style.header, style.bgBlue)}>
    <img className={css(style.logo)} alt='matchus logo' src='./logo.png' />
    <h1 className={css(style.mb0, style.title)}><div className={ css(style.break) }>Match Your&nbsp;</div><div className={ css(style.break) }>ACLU Donations</div></h1>
  </div>
);
