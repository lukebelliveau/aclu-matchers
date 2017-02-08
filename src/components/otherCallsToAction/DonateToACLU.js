import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import {block, darkGray, white, margin0auto, fontFamilyParagraphRegular} from '../../styles/shared';

const s = StyleSheet.create({
    buttonWrapper: {
        '@media (max-width: 740px)': Object.assign({}, block, {
            margin: '10px 15px',
            width: 'auto',
        }),
        '@media (min-width: 740px)': {         
            flex: 1,
            marginRight: '3.2rem',
            marginLeft: '3.2rem',
            maxWidth: '400px',        
        },
    },
    button: Object.assign({}, block, white, margin0auto, fontFamilyParagraphRegular, {
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