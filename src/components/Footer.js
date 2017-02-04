import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const s = StyleSheet.create({
  footer: {
    background: '#095D96',
    padding: '2rem',
  },
  a: {
    fontFamily: 'open_sansregular',
    fontSize: '1.5rem',
    color: 'white',
    textDecoration: 'none',
  }
});


const Footer = () => {
    return (
        <div className={css(s.footer)}>
            <a className={css(s.a)} href="https://docs.google.com/document/d/1uQda1goIN5m1Rb5anVNlWgU7Ra-uBEZBIa1GaHqfRH4/edit?usp=sharing" target="_blank">about matchUS.us</a>
        </div>
    );
};

export default Footer;