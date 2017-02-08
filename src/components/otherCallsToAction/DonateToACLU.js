import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const s = StyleSheet.create({
    buttonWrapper: {
        '@media (max-width: 740px)': {
            margin: '10px 15px',
            width: 'auto',
            display: 'block',
        },
        '@media (min-width: 740px)': {         
            flex: 1,
            marginRight: '3.2rem',
            marginLeft: '3.2rem',
            maxWidth: '400px',        
        },
    },
    button: {
        display: 'block',
        fontFamily: 'paragraph_regular',
        height: '100px',
        margin: '0 auto',
        color: 'white',
        boxShadow: '0px 7px 10px 2px rgba(23,95,122,0.25)',
        textDecoration: 'none',
        borderRadius: '7px',
        padding: '3.2rem 1.6rem 0',
        background: '#175F7A',
        fontSize: '22px',
        marginTop: '3.2rem',
        '@media (max-width: 740px)': {
            paddingTop: '1.8rem',
            height: '80px',
        }
    },
    caption: {
        fontSize: '2.4rem',
        color: '#33373A'
    },
    label: {
        '@media (max-width: 740px)': {
            fontSize: '2rem',
        }
    }
});

export default () => (
  <div className={css(s.buttonWrapper)}>
      <h2 className={css(s.caption)}>Haven't donated yet?</h2>
      <a className={css(s.button)} href="https://action.aclu.org/secure/donate-to-aclu" target="_blank">
          <div className={css(s.label)}>Donate to the American Civil Liberties Union</div>
      </a>
  </div>
);