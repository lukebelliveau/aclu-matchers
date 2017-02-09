import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import {darkGray, paragraphRegular, margin0auto, white, mt0, block} from '../../styles/shared';

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
    button: Object.assign({}, paragraphRegular, margin0auto, white, {
        display: 'block',
        height: '100px',
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
    }),
    caption: Object.assign({}, darkGray, {
        fontSize: '2.4rem',
    }),
    label: {
        '@media (max-width: 740px)': {
            fontSize: '2rem',
        }
    },
    icon: Object.assign({}, mt0, margin0auto, block, {
      height: '40px',
      position: 'relative',
      '@media (max-width: 740px)': {
          height: '30px',
      }
    })
});

const twitterMessage = 'https://matchus.us/aclu-matchers/ just helped my donation catch fire. Drag, drop and multiply your contribution, too! #lightamatch #aclumatch';

export default () => (
  <div className={css(s.buttonWrapper)}>
      <h2 className={css(s.caption)}>Dropped your receipt?</h2>
      <a className={css(s.button)} href={`https://twitter.com/intent/tweet?text=${twitterMessage}`}>
          <div className={css(s.label)}>Spread the fire on Twitter!</div>
          <svg className={css(s.icon)} viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="#fff"/></svg>
      </a>
  </div>
);