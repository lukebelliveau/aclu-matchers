import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const signature = {
  fontSize: '1em'
};

const styles = {
  wrapperStyle: {
    padding: '50px',
    paddingTop: 0,
    '@media (max-width: 425px)': {
      padding: '0px',
     }
  },
  body: {
    borderBottom: '2px solid #eee',
    borderTop: '2px solid #eee',
    paddingTop: 25,
    paddingBottom: 60,
    margin: '0 auto',
    marginTop: 40,
    width: '70%',
    '@media (max-width: 425px)': {
      padding: '15px',
      width: '90%'
     }
  },
  h2: {
    textAlign: 'left',
    margin: '30px 0'
  },
  p: {
    textAlign: 'left',
    marginTop: 30,
    marginBottom: 0
  },
  strong: {
    textAlign: 'left',
    display: 'block',
    marginTop: 30,
    fontSize: 18,
    '@media (max-width: 425px)': {
      fontSize: 14,
     }
  }
}

const style = StyleSheet.create(styles)

const Statement = () => (
  <div className={css(style.wrapperStyle)}>
    <div className={css(style.body)}>
      <h2 className={css(style.h2)}>Why donate?</h2>
      <blockquote>
        <p>
        Extreme vetting is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.
        </p>
        <footer>
          - Anthony D. Romero, Executive Director, American Civil Liberties Union
        </footer>
      </blockquote>
      <strong className={css(style.strong)}>We wholeheartedly agree with this statement - and we're not alone.</strong>
      <p className={css(style.p)}>
        People around the nation have offered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt.  Among others, we have matched donations with Ajay Chopra, Sia, and Jesse Tyler.
      </p>
    </div>
  </div>
);

export default Statement;
