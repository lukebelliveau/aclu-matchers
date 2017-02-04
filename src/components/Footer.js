import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const s = StyleSheet.create({
  footer: {
    background: '#095D96',
    padding: '2rem',
  },
  a: {
    fontFamily: 'open_sansregular',
    color: 'white',
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


const Footer = () => {
    return (
        <div className={css(s.footer)}>
            <a className={css(s.a)} href="https://docs.google.com/document/d/1uQda1goIN5m1Rb5anVNlWgU7Ra-uBEZBIa1GaHqfRH4/edit?usp=sharing" target="_blank">
              <div className={css(s.about)}>About</div>
              <img className={css(s.logo)} alt='matchus logo' src='./logo.png' />
            </a>
        </div>
    );
};

export default Footer;