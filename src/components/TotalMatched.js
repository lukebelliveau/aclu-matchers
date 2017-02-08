import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const s = StyleSheet.create({
  wrapper: {
    color: '#EAEAEA',
    background: '#33373A',
    fontSize: '1.6rem',
    padding: '3.2rem',
    '@media (max-width: 740px)': {
      padding: '1.6rem 4rem',
    },
  },
  amount: {
    fontSize: '4.4rem'
  },
  dateTime: {
    fontSize: '1.4rem',
    margin: 10,
    fontFamily: 'paragraph_light',
  }
});

const amountMatched = '688,000';
const timeEST = '12:00pm';
const date = 'February 7, 2017';

export default () => (
  <div className={css(s.wrapper)}>
    <div>
      <strong className={css(s.amount)}>
        ${ amountMatched }
      </strong><br />
      worth of donation matches have been shared through this site, all thanks to donors like you!
        <div className={css(s.dateTime)}>
        <div>Last updated { timeEST } EST on { date }</div>
      </div>
    </div>
  </div>
);
