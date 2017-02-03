import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = {
  amountStyle: {
    color: 'white',
    background: '#095D96',
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

const amountMatched = '399,000';
const timeEST = '8:00pm';
const date = 'February 2, 2017';

const TotalMatched = () => (
  <div className={css(style.amountStyle)}>
    <div>
      <strong style={ { fontSize: '2em', color: '#FAB022' } }>
        <i className="fa fa-usd"></i>{ amountMatched }
      </strong><br />
      worth of donation matches have been shared through this site, all thanks to donors like you!
        <div style={ dateTimeStyle }>
          <i>*as of { timeEST } EST on { date }</i>
      </div>
    </div>
  </div>
);

export default TotalMatched;
