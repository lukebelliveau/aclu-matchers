import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = {
  amountStyle: {
    color: '#EAEAEA',
    background: '#0B0C0E',
    padding: '2rem',
    '@media (max-width: 425px)': {
      padding: '1rem 2.5rem',
     }
  }
}

const dateTimeStyle = {
  fontSize: '0.9rem',
  margin: 10
};

const style = StyleSheet.create(styles);

const amountMatched = '550,000';
const timeEST = '5:00pm';
const date = 'February 4, 2017';

const TotalMatched = () => (
  <div className={css(style.amountStyle)}>
    <div>
      <strong style={ { fontSize: '2.7em', color: '#EAEAEA' } }>
        ${ amountMatched }
      </strong><br />
      worth of donation matches have been shared through this site, all thanks to donors like you!
        <div style={ dateTimeStyle }>
          <i>*as of { timeEST } EST on { date }</i>
      </div>
    </div>
  </div>
);

export default TotalMatched;
