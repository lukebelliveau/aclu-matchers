import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    buttonWrapper: {
        '@media (max-width: 425px)': {
            margin: '10px 15px',
            width: 'auto',
            display: 'block',
        },
        '@media (min-width: 425px)': {         
            flex: 1,
            marginRight: '2rem',
            marginLeft: '2rem',
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
        padding: '2rem 1rem 0rem',
        background: '#175F7A',
        fontSize: '22px',
        marginTop: '2rem',
        '@media (max-width: 425px)': {
            paddingTop: '1.8rem',
            height: '80px',
        }
    },
    caption: {
        fontSize: '1.5rem',
    },
    label: {
        '@media (max-width: 425px)': {
            fontSize: '1.2rem',
        }
    }
});

export default () => (
  <div className={css(styles.buttonWrapper)}>
      <h2 className={css(styles.caption)}>Haven't donated yet?</h2>
      <a className={css(styles.button)} href="https://action.aclu.org/secure/donate-to-aclu" target="_blank">
          <div className={css(styles.label)}>Donate to the American Civil Liberties Union</div>
      </a>
  </div>
);