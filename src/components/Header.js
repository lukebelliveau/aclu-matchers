import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import { mb0, alignLeft, inlineBlock, block, darkGray, m0auto } from '../styles/shared';

const s = StyleSheet.create({
  mb0,
  header: {
    backgroundSize: '100%'
  },
  title: Object.assign({}, alignLeft, inlineBlock, darkGray, {
    margin: '1.2rem 0',
    fontSize: '2.4rem',
    '@media (max-width: 740px)': {
      margin: '0 0 1.6rem 0',
      fontSize: '2.4rem'
     }
  }),
  logo: Object.assign({}, inlineBlock, {
    height: '4.8rem',
    marginRight: '1.6rem',
    '@media (max-width: 740px)': Object.assign({}, block, m0auto, {
      height: 'auto',
      width: '90%',
      marginTop: '1.6rem',
      marginBottom: '.8rem'
    }),
  }),
  break: {
    '@media (max-width: 740px)': Object.assign({}, inlineBlock),
  }
});

export default () => (
  <div className={css(s.header, s.bgBlue)}>
    <img className={css(s.logo)} alt='matchus logo' src='./logo.png' />
    <h1 className={css(s.mb0, s.title)}>
      <div className={css(s.break)}>Match Your&nbsp;</div>
      <div className={css(s.break)}>ACLU Donations</div>
    </h1>
  </div>
);
