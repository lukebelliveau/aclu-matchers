import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import {alignLeft, block, mb0, pt0} from '../styles/shared';

const s = StyleSheet.create({
  wrapperStyle: Object.assign({}, pt0, {
    fontSize: '1.6rem',
    padding: '50px',
    '@media (max-width: 740px)': {
      padding: '0px',
     }
  }),
  body: {
    borderBottom: '2px solid #eee',
    borderTop: '2px solid #eee',
    paddingTop: 25,
    paddingBottom: 60,
    margin: '0 auto',
    marginTop: 40,
    maxWidth: 1024,
    '@media (max-width: 740px)': {
      padding: '15px',
      width: '90%'
     }
  },
  h2: Object.assign({}, alignLeft, {
    margin: '30px 0'
  }),
  p: Object.assign({}, alignLeft, mb0, {
    marginTop: 30,
  }),
  strong: Object.assign({}, block, alignLeft, {
    marginTop: 30,
    fontSize: 18,
    '@media (max-width: 740px)': {
      fontSize: 14,
     }
  }),
  quote: {
    borderLeft: '5px solid #96989B',
    padding: '10px 20px',
    margin: '0 0 20px',
  },
  quoteParagraph: Object.assign({}, alignLeft, {
    margin: '0 0 10px',
    fontSize: '18px',
    lineHeight: 1.7,
    '@media (max-width: 740px)': {
      fontSize: '14px',
      lineHeight: '1.5em',
    }
  }),
  quoteFooter: Object.assign({}, alignLeft, {
    fontSize: '80%',
    lineHeight: 1.5,
  }),
});

export default () => (
  <div className={css(s.wrapperStyle)}>
    <div className={css(s.body)}>
      <h2 className={css(s.h2)}>Why donate?</h2>
      <blockquote className={css(s.quote)}>
        <p className={css(s.quoteParagraph)}>
          Extreme vetting is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.
        </p>
        <footer className={css(s.quoteFooter)}>
          - Anthony D. Romero, Executive Director, American Civil Liberties Union
        </footer>
      </blockquote>
      <strong className={css(s.strong)}>
        We wholeheartedly agree with this statement - and we're not alone.
      </strong>
      <p className={css(s.p)}>
        People around the nation have offered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt.  Among others, we have matched donations with Ajay Chopra, Sia, and Jesse Tyler.
      </p>
    </div>
  </div>
);
