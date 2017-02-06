import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = {
  wrapper: {
    color: '#EAEAEA',
    background: '#0B0C0E',
    padding: '2rem',
    '@media (max-width: 425px)': {
      padding: '1rem 2.5rem',
    },
  },
  amount: {
    fontSize: '2.7em'
  },
  dateTime: {
    fontSize: '0.9rem',
    margin: 10,
    fontFamily: 'paragraph_thin'
  }
};

const style = StyleSheet.create(styles);

const amountMatched = '625,000';
const timeEST = '9:00am';
const date = 'February 6, 2017';

const TotalMatched = () => (
  <div className={css(style.wrapper)}>
    <div>
      <strong className={ css(style.amount) }>
        ${ amountMatched }
      </strong><br />
      worth of donation matches have been shared through this site, all thanks to donors like you!
        <div className={ css(style.dateTime) }>
        <div>Last updated { timeEST } EST on { date }</div>
      </div>
    </div>
  </div>
);

export default TotalMatched;
