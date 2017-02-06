import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import TwitterWidget from './TwitterWidget';

const styles = StyleSheet.create({
  footer: {
    background: '#EAEAEA',
    padding: '2rem',
  },
  a: {
    fontFamily: 'heading_regular',
    color: '#33373A',
    textDecoration: 'none',
  },
  about: {
    display: 'inline-block',
    fontSize: '1.5rem',
    marginRight: '0.5rem'
  },
  logo: {
    display: 'inline-block',
    margin: '0 auto',
    height: '1.5rem',
  }
});

export default () => (
  <div>
    <TwitterWidget />
    <div className={css(styles.footer)}>
        <a className={css(styles.a)} href="https://docs.google.com/document/d/1uQda1goIN5m1Rb5anVNlWgU7Ra-uBEZBIa1GaHqfRH4/edit?usp=sharing" target="_blank">
          <div className={css(styles.about)}>About</div>
          <img className={css(styles.logo)} alt='matchus logo' src='./logo.png' />
        </a>
    </div>
  </div>
);