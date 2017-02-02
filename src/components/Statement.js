import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const signature = {
  fontSize: '1em'
};

const styles = {
  wrapperStyle: {
    background: '#8ddbff',
    padding: '50px',
    marginBottom: '30px',
    '@media (max-width: 425px)': {
      padding: '0px',
     }
  },
  body: {
    padding: 25,
    margin: '0 auto',
    width: '70%',
    '@media (max-width: 425px)': {
      padding: '15px',
      width: '90%'
     }
  }
}

const style = StyleSheet.create(styles)

const Statement = () => (
  <div className={css(style.wrapperStyle)}>
    <div className={css(style.body)}>
      <i>
        “‘Extreme vetting’ is just a euphemism for discrimination against Muslims. Identifying specific countries with Muslim majorities and carving out exceptions for minority religions flies in the face of the constitutional principle that bans the government from either favoring or discriminating against particular religions. Any effort to discriminate against Muslims and favor other religions runs afoul of the First Amendment.”
      </i>

      <p style={signature}>
        - Anthony D. Romero, Executive Director, American Civil Liberties Union
      </p>
      <p>
        The above is a statement from the Executive Director of the ACLU, a statement that I wholeheartedly agree with - and I'm not alone.
        <br/>
        <br />
        People around the nation have offered to match our donations to the ACLU; all they need from us is a tweet with the donation receipt.
        <br/>
        <br />
        Drag and drop your receipt above, and I will automatically tweet your receipt to at least ten matching donors. Multiply your donation by 10!
      </p>
    </div>
  </div>
);

export default Statement;
