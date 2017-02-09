import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import {paragraphLight, bgDarkGray} from '../styles/shared';

const s = StyleSheet.create({
  wrapper: Object.assign({}, bgDarkGray, {
    color: '#EAEAEA',
    fontSize: '1.6rem',
    padding: '3.2rem',
    '@media (max-width: 740px)': {
      padding: '1.6rem 4rem',
    },
  }),
  amount: {
    fontSize: '4.4rem'
  },
  dateTime: Object.assign({}, paragraphLight, {
    fontSize: '1.4rem',
    margin: 10,
  }),
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
