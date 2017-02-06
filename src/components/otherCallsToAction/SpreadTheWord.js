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
    },
    icon: {
      height: '40px',
      display: 'block',
      margin: '0 auto',
      position: 'relative',
      marginTop: '0rem',
      '@media (max-width: 425px)': {
          height: '30px',
      }
    }
});

const twitterMessage = 'https://matchus.us/aclu-matchers/ just helped my donation catch fire. Drag, drop and multiply your contribution, too! #lightamatch #aclumatch';

export default () => 
  <div className={ css(styles.buttonWrapper)}>
      <h2 className={css(styles.caption)}>Dropped your receipt?</h2>
      <a className={ css(styles.button) } href={`https://twitter.com/intent/tweet?text=${twitterMessage}`}>
          <div className={ css(styles.label) }>Spread the fire on Twitter!</div>
          <svg className={css(styles.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
      </a>
  </div>